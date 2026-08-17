# web/app.py  — TeamPlus Flask App v2
import sys, os, json, uuid, secrets, hmac, csv, io, re
from pathlib import Path
from datetime import datetime
from flask import Flask, render_template, request, jsonify, session, redirect, url_for, Response
try:
    from .persistence import ListStore
except ImportError:
    from persistence import ListStore


from dotenv import load_dotenv

import sys
sys.stdout.flush()

load_dotenv()

THIS_DIR     = Path(__file__).resolve().parent
STFP_ROOT    = THIS_DIR.parent
PROJECT_ROOT = STFP_ROOT.parent

if str(STFP_ROOT) not in sys.path:
    sys.path.insert(0, str(STFP_ROOT))




DB_PATH   = STFP_ROOT / "Data" / "base_final.json"
HIST_PATH    = THIS_DIR / "historico_sugestoes.json"
BACKLOG_PATH = THIS_DIR / "backlog_projetos.json"
RUNS_PATH    = THIS_DIR / "recommendation_runs.json"

if not HIST_PATH.exists():
    HIST_PATH.write_text("[]", encoding="utf-8")

HIST_STORE = ListStore("team_allocations", HIST_PATH)
BACKLOG_STORE = ListStore("backlog_projects", BACKLOG_PATH)
RUNS_STORE = ListStore("recommendation_runs", RUNS_PATH)

from Algorithms.GA.engine import run_ga_com_config
#from Pipeline.evaluate_teams import avaliar_equipe

from Pipeline.evaluate_teams_sur import avaliar_equipe_surrogate as avaliar_equipe

app = Flask(__name__)
app.secret_key = os.environ.get("TEAMPLUS_SESSION_SECRET") or secrets.token_hex(32)
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=os.environ.get("FLASK_ENV") == "production"
    or os.environ.get("RENDER") == "true",
    PERMANENT_SESSION_LIFETIME=8 * 60 * 60,
)

ADMIN_USERNAME = os.environ.get("TEAMPLUS_ADMIN_USERNAME", "admin")
ADMIN_PASSWORD = os.environ.get("TEAMPLUS_ADMIN_PASSWORD", "admin")


@app.before_request
def exigir_login():
    if request.endpoint in {"login", "static"}:
        return None
    if session.get("autenticado"):
        return None
    if request.path.startswith("/api/") or request.path == "/sugerir":
        return jsonify({"erro": "Sessão expirada. Entre novamente."}), 401
    return redirect(url_for("login", next=request.path))


@app.route("/login", methods=["GET", "POST"])
def login():
    erro = None
    if request.method == "POST":
        usuario = request.form.get("usuario", "")
        senha = request.form.get("senha", "")
        usuario_ok = hmac.compare_digest(usuario, ADMIN_USERNAME)
        senha_ok = hmac.compare_digest(senha, ADMIN_PASSWORD)
        if usuario_ok and senha_ok:
            session.clear()
            session["autenticado"] = True
            session["usuario"] = ADMIN_USERNAME
            session.permanent = True
            destino = request.args.get("next", "")
            if not destino.startswith("/") or destino.startswith("//"):
                destino = url_for("index")
            return redirect(destino)
        erro = "Usuário ou senha inválidos."
    return render_template("login.html", erro=erro)


@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return redirect(url_for("login"))

MIN_TEAM_SIZE = 2
MAX_TEAM_SIZE = 12


def _validar_team_size(valor):
    """Converte e valida o tamanho antes de acionar qualquer processamento."""
    try:
        tamanho = int(valor)
    except (TypeError, ValueError):
        return None, "Informe um tamanho de equipe válido."

    if not MIN_TEAM_SIZE <= tamanho <= MAX_TEAM_SIZE:
        return None, (
            f"O tamanho da equipe deve estar entre {MIN_TEAM_SIZE} e "
            f"{MAX_TEAM_SIZE} integrantes."
        )
    return tamanho, None


LINGUAGENS_CONHECIDAS = {
    "bash", "c", "c#", "c++", "css", "dart", "go", "html", "java",
    "javascript", "kotlin", "lua", "php", "powershell", "python", "r",
    "ruby", "rust", "scala", "shell", "sql", "swift", "typescript",
}

DOMINIOS_CONHECIDOS = {
    "artificial intelligence", "bci", "blockchain", "cloud", "desktop client",
    "desktop standalone", "digital tv", "e-commerce", "embedded systems",
    "extended reality", "game", "hardware", "iot", "mobile", "scada", "web",
    "xr", "ia",
}


def _normalizar_taxonomia(projeto):
    """Realoca linguagens e domínios retornados pela IA na dimensão correta."""
    normalizado = {}
    for dimensao in ("dominio", "ecossistema", "linguagens"):
        origem = projeto.get(dimensao, {}) if isinstance(projeto, dict) else {}
        normalizado[dimensao] = {}
        for prioridade in ("must", "should", "could"):
            vistos = set()
            itens = []
            for valor in origem.get(prioridade, []) or []:
                texto = str(valor).strip()
                chave = texto.casefold()
                if texto and chave not in vistos:
                    vistos.add(chave)
                    itens.append(texto)
            normalizado[dimensao][prioridade] = itens

    for prioridade in ("must", "should", "could"):
        for origem in ("dominio", "ecossistema"):
            manter = []
            for item in normalizado[origem][prioridade]:
                if item.casefold() in LINGUAGENS_CONHECIDAS:
                    if item.casefold() not in {
                        x.casefold() for x in normalizado["linguagens"][prioridade]
                    }:
                        normalizado["linguagens"][prioridade].append(item)
                else:
                    manter.append(item)
            normalizado[origem][prioridade] = manter

        for origem in ("ecossistema", "linguagens"):
            manter = []
            for item in normalizado[origem][prioridade]:
                if item.casefold() in DOMINIOS_CONHECIDOS:
                    if item.casefold() not in {
                        x.casefold() for x in normalizado["dominio"][prioridade]
                    }:
                        normalizado["dominio"][prioridade].append(item)
                else:
                    manter.append(item)
            normalizado[origem][prioridade] = manter
    return normalizado

# ── Helpers ───────────────────────────────────────────────────────────────────
def _load_db():
    with open(DB_PATH, encoding="utf-8") as f:
        raw = json.load(f)
    return raw if isinstance(raw, list) else raw.get("developers", [])

def _read_hist():
    return HIST_STORE.read()

def _write_hist(hist):
    HIST_STORE.write(hist)



def _read_backlog():
    return BACKLOG_STORE.read()

def _write_backlog(bl):
    BACKLOG_STORE.write(bl)

def _read_runs():
    return RUNS_STORE.read()

def _write_runs(runs):
    RUNS_STORE.write(runs)

def _score_label(score):
    return (
        "VH" if score >= 0.8 else
        "H" if score >= 0.6 else
        "M" if score >= 0.4 else
        "L" if score >= 0.2 else "VL"
    )

def _adicionar_metricas_sugestao(sugestao, projeto_alvo):
    """Anexa métricas explicativas sem alterar o resultado ou ranking do GA."""
    try:
        resultado = avaliar_equipe(sugestao.get("best_team", []), projeto_alvo, log=False)
        scores = {}
        for dim, valor in (resultado.get("scores") or {}).items():
            if isinstance(valor, dict):
                scores[dim] = {
                    "score": round(float(valor.get("score") or 0), 4),
                    "rotulo": valor.get("rotulo", "—"),
                }
        at_score = round(float(resultado.get("AT_cont") or 0), 4)
        ac_score = round(float(resultado.get("AC_cont") or 0), 4)
        sugestao.update({
            "_scores": scores,
            "_coverage": resultado.get("coverage", {}),
            "_at_score": at_score,
            "_at_label": _score_label(at_score),
            "_ac_score": ac_score,
            "_ac_label": _score_label(ac_score),
        })
    except Exception as exc:
        print(f"[AVISO MÉTRICAS RUN] {exc}")

def _salvar_recommendation_run(data, projeto_alvo, sugestoes, seed, resultado_ga):
    run_id = str(uuid.uuid4())
    run = {
        "id": run_id,
        "timestamp": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "project_id": str(data.get("project_id") or ""),
        "backlog_id": str(data.get("backlog_id") or ""),
        "nome_projeto": data.get("nome_projeto", "Projeto sem título"),
        "descricao": str(data.get("descricao") or "").strip(),
        "projeto_alvo": projeto_alvo,
        "team_size": int(data.get("team_size") or 4),
        "seed": seed,
        "gens_executed": resultado_ga.get("gens_executed", 0),
        "best_generation": resultado_ga.get("best_generation", 0),
        "duration_sec": round(resultado_ga.get("duration_sec", 0), 2),
        "stop_reason": resultado_ga.get("stop_reason", "—"),
        "population_size": 150,
        "max_generations": 200,
        "elitism_count": 3,
        "mutation_rate": 0.005,
        "crossover_rate": 1.0,
        "stable_gens": 20,
        "crossover_operator": "ccc",
        "sugestoes": [dict(s, ranking=i + 1) for i, s in enumerate(sugestoes)],
    }
    runs = _read_runs()
    runs.insert(0, run)
    _write_runs(runs[:200])

    backlog_id = run["backlog_id"]
    if backlog_id:
        backlog = _read_backlog()
        for item in backlog:
            if item.get("id") == backlog_id:
                item["latest_run_id"] = run_id
                item["ultima_execucao_em"] = run["timestamp"]
                _write_backlog(backlog)
                break
    return run_id

def _dev_info(dev_id: int, devs: list) -> dict:
    for d in devs:
        try:
            did = int(d.get("id") or d.get("user_id") or -1)
        except Exception:
            continue
        if did == dev_id:
            return {
                "id":          f"Dev{dev_id}",
                "user_id":     dev_id,
                "role":        d.get("contractRoleName", "—"),
                "dominio":     d.get("dominio", []),
                "ecossistema": d.get("ecossistema", []),
                "linguagens":  d.get("linguagens", []),
                "metodologia": d.get("methodology", []),
            }
    return {"id": f"Dev{dev_id}", "user_id": dev_id,
            "role": "—", "dominio": [], "ecossistema": [], "linguagens": [], "metodologia": []}
def _enriquecer(resultado: dict, projeto_alvo: dict, entrada: dict) -> dict:
    """Recebe retorno bruto do GA e adiciona membros + metadados."""
    devs     = _load_db()
    best_ids = [int(x) for x in resultado.get("best_team", [])]
    membros  = [_dev_info(i, devs) for i in best_ids]
    return {
        "timestamp":     datetime.now().strftime("%d/%m/%Y %H:%M"),
        "entrada":       entrada,
        "best_team":     best_ids,
        "membros":       membros,
        "best_fitness":  round(resultado.get("best_fitness", 0), 4),
        "gens_executed": resultado.get("gens_executed", 0),
        "duration_sec":  round(resultado.get("duration_sec", 0), 2),
        "stop_reason":   resultado.get("stop_reason", "—"),
    }

# ── Rotas ─────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/sugerir", methods=["POST"])
def sugerir():
    """Roda o GA uma vez, com uma seed aleatória, e retorna as equipes ranqueadas."""
    data = request.get_json(silent=True) or {}

    projeto_alvo = {
        "dominio":     data.get("dominio",     {"must": [], "should": [], "could": []}),
        "ecossistema": data.get("ecossistema", {"must": [], "should": [], "could": []}),
        "linguagens":  data.get("linguagens",  {"must": [], "should": [], "could": []}),
    }

    tem_must = any(
        len(projeto_alvo[dim].get("must", [])) > 0
        for dim in ["dominio", "ecossistema", "linguagens"]
    )
    if not tem_must:
        return jsonify({"erro": "Adicione ao menos uma tecnologia MUST e pressione Enter."}), 400

    team_size, erro_team_size = _validar_team_size(data.get("team_size", 4))
    if erro_team_size:
        return jsonify({"erro": erro_team_size}), 400
    pop_size  = 150
    geracoes  = 200
    nome_proj = data.get("nome_projeto", "Projeto sem título")
    project_id = data.get("project_id", "")

    entrada = {
        "nome_projeto": nome_proj,
        "projeto_alvo": projeto_alvo,
        "team_size":    team_size,
        "pop_size":     pop_size,
        "geracoes":     geracoes,
    }

    try:
        import time as _time
        _seed = int(_time.time() * 1000) % 2**31   # seed aleatória por execução
        fixed_devs = [int(x) for x in data.get("fixed_devs", [])]
        res = run_ga_com_config(
            PROJETO_ALVO_EXTERNO = projeto_alvo,
            team_size            = team_size,
            pop_size             = pop_size,
            geracoes             = geracoes,
            seed                 = _seed,
            elitism_count        = 3,
            mutation_rate        = 0.005,
            crossover_rate       = 1.0,
            stable_gens          = 20,
            crossover_operator   = "ccc",
            verbose              = False,
            report               = False,
            log_eval             = False,
            fixed_devs           = fixed_devs if fixed_devs else None,
        )
    except Exception:
        import traceback
        print("[ERRO GA]", traceback.format_exc())
        return jsonify({
            "erro": "Não foi possível montar as equipes. Tente novamente em instantes."
        }), 500

    devs = _load_db()
    sugestoes = []
    for t in res.get("top_teams", [{"team": res["best_team"], "fitness": res["best_fitness"]}]):
        ids     = [int(x) for x in t["team"]]
        membros = [_dev_info(i, devs) for i in ids]
        sugestoes.append({
            "timestamp":     datetime.now().strftime("%d/%m/%Y %H:%M"),
            "project_id":    project_id,
            "entrada":       entrada,
            "best_team":     ids,
            "membros":       membros,
            "best_fitness":  round(t["fitness"], 4),
            "gens_executed": res.get("gens_executed", 0),
            "best_generation": res.get("best_generation", 0),
            "duration_sec":  round(res.get("duration_sec", 0), 2),
            "stop_reason":   res.get("stop_reason", "—"),
            "seed":          _seed,
            "population_size": pop_size,
            "max_generations": geracoes,
            "elitism_count": 3,
            "mutation_rate": 0.005,
            "crossover_rate": 1.0,
            "stable_gens": 20,
            "crossover_operator": "ccc",
        })
    for sugestao in sugestoes:
        _adicionar_metricas_sugestao(sugestao, projeto_alvo)
    try:
        run_id = _salvar_recommendation_run(data, projeto_alvo, sugestoes, _seed, res)
    except Exception:
        import traceback
        print("[ERRO PERSISTÊNCIA RUN]", traceback.format_exc())
        return jsonify({
            "erro": "As equipes foram calculadas, mas não foi possível registrar a execução. Tente novamente."
        }), 500
    return jsonify({
        "nome_projeto": nome_proj,
        "projeto_alvo": projeto_alvo,
        "sugestoes":    sugestoes,
        "run_id":       run_id,

    })
    


@app.route("/api/avaliar", methods=["POST"])
def api_avaliar():
    """
    Reavalia uma equipe modificada manualmente.
    Body: { "team_ids": [int, ...], "projeto_alvo": {...} }
    Retorna: { "fitness": float, "membros": [...], "scores": {...} }
    """
    data         = request.get_json(silent=True) or {}
    team_ids     = [int(x) for x in data.get("team_ids", [])]
    projeto_alvo = data.get("projeto_alvo", {})

    if not team_ids:
        return jsonify({"erro": "team_ids vazio"}), 400

    try:
        resultado = avaliar_equipe(team_ids, projeto_alvo, log=False)
    except Exception as e:
        import traceback
        print("[ERRO AVALIAR]", traceback.format_exc())
        return jsonify({"erro": str(e)}), 500

    devs    = _load_db()
    membros = [_dev_info(i, devs) for i in team_ids]
    fitness = round(float(resultado.get("media_AE", 0)), 4)
    at_score = round(float(resultado.get("AT_cont") or 0), 4)
    at_label = (
        "VH" if at_score >= 0.8 else
        "H" if at_score >= 0.6 else
        "M" if at_score >= 0.4 else
        "L" if at_score >= 0.2 else "VL"
    )
    # AC_cont é o componente colaborativo efetivamente combinado com AT_cont
    # pelo surrogate para formar o AE. pc_score permanece apenas como métrica
    # auxiliar/legada da distribuição dos pares.
    ac_score = round(float(resultado.get("AC_cont") or 0), 4)
    ac_label = (
        "VH" if ac_score >= 0.8 else
        "H" if ac_score >= 0.6 else
        "M" if ac_score >= 0.4 else
        "L" if ac_score >= 0.2 else "VL"
    )

    # Extrai scores por dimensão se disponíveis
    scores = {}
    raw_scores = resultado.get("scores", {})
    if isinstance(raw_scores, dict):
        for dim, val in raw_scores.items():
            if isinstance(val, dict):
                scores[dim] = {
                    "score":  round(float(val.get("score") or 0), 4),
                    "rotulo": val.get("rotulo", "—"),
                }

    return jsonify({
        "fitness":  fitness,
        "membros":  membros,
        "scores":   scores,
        "at_score": at_score,
        "at_label": at_label,
        "ac_score": ac_score,
        "ac_label": ac_label,
        "pc_score": round(float(resultado.get("pc_score") or 0), 4),
        "pc_label": resultado.get("pc_label", "—"),
        "coverage":   resultado.get("coverage",   {}),
        "pares_info": resultado.get("pares_info", {}),
    })


@app.route("/api/salvar", methods=["POST"])
def api_salvar():
    """
    Salva a sugestão escolhida no histórico com status 'alocado'.
    Body: { "sugestao": {...}, "nome_projeto": "...", "projeto_alvo": {...} }
    """
    data      = request.get_json(silent=True) or {}
    sugestao  = data.get("sugestao", {})
    sugestao_ga = data.get("sugestao_ga_original")
    backlog_id = str(data.get("backlog_id") or "").strip()
    registro_id = str(data.get("registro_id") or "").strip()
    run_id = str(data.get("run_id") or "").strip()
    nome_proj = data.get("nome_projeto", "Projeto sem título")

    registro = {
        "id":           registro_id or datetime.now().strftime("%Y%m%d%H%M%S"),
        "status":       "alocado",
        "timestamp":    datetime.now().strftime("%d/%m/%Y %H:%M"),
        "nome_projeto": nome_proj,
        "descricao":    str(data.get("descricao") or "").strip(),
        "projeto_alvo": data.get("projeto_alvo", {}),
        "best_team":    sugestao.get("best_team", []),
        "membros":      sugestao.get("membros", []),
        "best_fitness": sugestao.get("best_fitness", 0),
        "gens_executed":sugestao.get("gens_executed", 0),
        "duration_sec": sugestao.get("duration_sec", 0),
        "stop_reason":  sugestao.get("stop_reason", "—"),
        "project_id":   sugestao.get("project_id", data.get("project_id", "")),
        "seed":         sugestao.get("seed"),
        "best_generation": sugestao.get("best_generation"),
        "population_size": sugestao.get("population_size"),
        "max_generations": sugestao.get("max_generations"),
        "elitism_count": sugestao.get("elitism_count"),
        "mutation_rate": sugestao.get("mutation_rate"),
        "crossover_rate": sugestao.get("crossover_rate"),
        "stable_gens": sugestao.get("stable_gens"),
        "crossover_operator": sugestao.get("crossover_operator"),
    }
    if backlog_id:
        registro["backlog_id"] = backlog_id
    if run_id:
        registro["run_id"] = run_id
        try:
            registro["ranking_escolhido"] = int(data.get("ranking_escolhido"))
        except (TypeError, ValueError):
            registro["ranking_escolhido"] = None

    # Mantém a equipe originalmente sugerida pelo AG separada da composição
    # que o gestor eventualmente ajustou antes de salvar. Registros antigos
    # continuam válidos porque este campo é opcional.
    if isinstance(sugestao_ga, dict) and sugestao_ga.get("best_team"):
        registro["equipe_ga_original"] = {
            "best_team": sugestao_ga.get("best_team", []),
            "membros": sugestao_ga.get("membros", []),
            "best_fitness": sugestao_ga.get("best_fitness", 0),
            "gens_executed": sugestao_ga.get("gens_executed", 0),
            "duration_sec": sugestao_ga.get("duration_sec", 0),
        }

    hist = _read_hist()
    if registro_id:
        indice = next((i for i, item in enumerate(hist) if item.get("id") == registro_id), None)
        if indice is None:
            return jsonify({"erro": "Registro do histórico não encontrado para atualização."}), 404
        registro["atualizado_em"] = datetime.now().strftime("%d/%m/%Y %H:%M")
        hist[indice] = registro
    else:
        hist.insert(0, registro)
    hist = hist[:100]
    _write_hist(hist)

    # Um item só sai do backlog depois que seu registro foi efetivamente
    # gravado no histórico. Funciona tanto no fluxo individual quanto na fila.
    if backlog_id:
        backlog = [item for item in _read_backlog() if item.get("id") != backlog_id]
        _write_backlog(backlog)

    return jsonify({"ok": True, "id": registro["id"], "atualizado": bool(registro_id)})

@app.route("/api/sugerir_fila", methods=["POST"])
def sugerir_fila():
    """
    Roda o GA para um único projeto da fila.
    Body: { projeto_alvo, team_size, nome_projeto, excluded_devs, fixed_devs }
    Retorna as sugestões no mesmo formato de /sugerir.
    """
    data = request.get_json(silent=True) or {}

    projeto_alvo = {
        "dominio":     data.get("dominio",     {"must": [], "should": [], "could": []}),
        "ecossistema": data.get("ecossistema", {"must": [], "should": [], "could": []}),
        "linguagens":  data.get("linguagens",  {"must": [], "should": [], "could": []}),
    }

    team_size, erro_team_size = _validar_team_size(data.get("team_size", 4))
    if erro_team_size:
        return jsonify({"erro": erro_team_size}), 400
    nome_proj     = data.get("nome_projeto", "Projeto sem título")
    project_id    = data.get("project_id", "")
    excluded_devs = [int(x) for x in data.get("excluded_devs", [])]
    fixed_devs    = [int(x) for x in data.get("fixed_devs", [])]

    try:
        import time as _time
        _seed = int(_time.time() * 1000) % 2**31
        res = run_ga_com_config(
            PROJETO_ALVO_EXTERNO = projeto_alvo,
            team_size            = team_size,
            pop_size             = 150,
            geracoes             = 200,
            seed                 = _seed,
            elitism_count        = 3,
            mutation_rate        = 0.005,
            crossover_rate       = 1.0,
            stable_gens          = 20,
            crossover_operator   = "ccc",
            verbose              = False,
            report               = False,
            log_eval             = False,
            fixed_devs           = fixed_devs if fixed_devs else None,
            excluded_devs        = excluded_devs if excluded_devs else None,
        )
    except Exception:
        import traceback
        print("[ERRO GA FILA]", traceback.format_exc())
        return jsonify({
            "erro": "Não foi possível montar as equipes deste projeto. Tente novamente."
        }), 500

    devs      = _load_db()
    sugestoes = []
    for t in res.get("top_teams", [{"team": res["best_team"], "fitness": res["best_fitness"]}]):
        ids     = [int(x) for x in t["team"]]
        membros = [_dev_info(i, devs) for i in ids]
        sugestoes.append({
            "timestamp":     datetime.now().strftime("%d/%m/%Y %H:%M"),
            "project_id":    project_id,
            "best_team":     ids,
            "membros":       membros,
            "best_fitness":  round(t["fitness"], 4),
            "gens_executed": res.get("gens_executed", 0),
            "best_generation": res.get("best_generation", 0),
            "duration_sec":  round(res.get("duration_sec", 0), 2),
            "stop_reason":   res.get("stop_reason", "—"),
            "seed":          _seed,
            "population_size": 150,
            "max_generations": 200,
            "elitism_count": 3,
            "mutation_rate": 0.005,
            "crossover_rate": 1.0,
            "stable_gens": 20,
            "crossover_operator": "ccc",
        })

    for sugestao in sugestoes:
        _adicionar_metricas_sugestao(sugestao, projeto_alvo)
    try:
        run_id = _salvar_recommendation_run(data, projeto_alvo, sugestoes, _seed, res)
    except Exception:
        import traceback
        print("[ERRO PERSISTÊNCIA RUN FILA]", traceback.format_exc())
        return jsonify({
            "erro": "As equipes foram calculadas, mas não foi possível registrar a execução. Tente novamente."
        }), 500

    return jsonify({
        "nome_projeto": nome_proj,
        "projeto_alvo": projeto_alvo,
        "sugestoes":    sugestoes,
        "run_id":       run_id,
    })

@app.route("/api/backlog", methods=["GET"])
def api_backlog_get():
    return jsonify(_read_backlog())

@app.route("/api/backlog", methods=["POST"])
def api_backlog_add():
    data = request.get_json(silent=True) or {}
    team_size, erro_team_size = _validar_team_size(data.get("team_size", 4))
    if erro_team_size:
        return jsonify({"erro": erro_team_size}), 400
    bl   = _read_backlog()
    novo = {
        "id":           str(uuid.uuid4())[:8],
        "project_id":   data.get("project_id", ""),
        "nome_projeto": data.get("nome_projeto", "Projeto sem título"),
        "descricao":    str(data.get("descricao") or "").strip(),
        "projeto_alvo": data.get("projeto_alvo", {}),
        "team_size":    team_size,
        "criado_em":    datetime.now().strftime("%d/%m/%Y %H:%M"),
    }
    bl.append(novo)
    _write_backlog(bl)
    return jsonify({"ok": True, "id": novo["id"]})

@app.route("/api/backlog/<item_id>", methods=["DELETE"])
def api_backlog_delete(item_id):
    bl = [x for x in _read_backlog() if x["id"] != item_id]
    _write_backlog(bl)
    return jsonify({"ok": True})

@app.route("/api/backlog/<item_id>", methods=["PUT"])
def api_backlog_update(item_id):
    data = request.get_json(silent=True) or {}
    team_size, erro_team_size = _validar_team_size(data.get("team_size", 4))
    if erro_team_size:
        return jsonify({"erro": erro_team_size}), 400
    nome = str(data.get("nome_projeto") or "").strip()
    if not nome:
        return jsonify({"erro": "Informe o nome do projeto."}), 400
    backlog = _read_backlog()
    indice = next((i for i, item in enumerate(backlog) if item.get("id") == item_id), None)
    if indice is None:
        return jsonify({"erro": "Projeto não encontrado no backlog."}), 404
    backlog[indice] = {
        **backlog[indice],
        "project_id": data.get("project_id", ""),
        "nome_projeto": nome,
        "descricao": str(data.get("descricao") or "").strip(),
        "projeto_alvo": data.get("projeto_alvo", {}),
        "team_size": team_size,
        "atualizado_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
    }
    _write_backlog(backlog)
    return jsonify({"ok": True, "id": item_id, "atualizado": True})

@app.route("/api/backlog/reorder", methods=["POST"])
def api_backlog_reorder():
    order = request.get_json(silent=True) or []
    bl    = _read_backlog()
    bl_map = {x["id"]: x for x in bl}
    bl_new = [bl_map[i] for i in order if i in bl_map]
    _write_backlog(bl_new)
    return jsonify({"ok": True})

@app.route("/api/recommendation-runs/<run_id>/csv", methods=["GET"])
def baixar_recommendation_run_csv(run_id):
    run = next((item for item in _read_runs() if item.get("id") == run_id), None)
    if run is None:
        return jsonify({"erro": "Execução de recomendações não encontrada."}), 404

    projeto = run.get("projeto_alvo") or {}
    cabecalho = [
        "Ranking", "ProjectId", "Projeto", "Fitness", "FitnessPercentual", "Classificacao",
        "EquipeIds", "Membros", "DomMust", "DomShould", "DomCould",
        "EcoMust", "EcoShould", "EcoCould", "LingMust", "LingShould", "LingCould",
        "DomScore", "DomClassificacao", "EcoScore", "EcoClassificacao",
        "LingScore", "LingClassificacao", "ATScore", "ATClassificacao",
        "ACScore", "ACClassificacao", "MustDomOk", "MustEcoOk", "MustLingOk", "AllMustOk",
        "Seed", "BestGeneration", "DuracaoSegundos", "GeracoesExecutadas", "MotivoParada",
        "PopulationSize", "MaxGenerations", "MutationRate", "CrossoverRate",
        "ElitismCount", "StableGens", "CrossoverOperator", "Timestamp", "RunId",
    ]

    def lista(dim, prioridade):
        return " | ".join(projeto.get(dim, {}).get(prioridade, []) or [])

    def must_ok(sugestao, dim):
        requisitos = projeto.get(dim, {}).get("must", []) or []
        if not requisitos:
            return True
        cobertura = (sugestao.get("_coverage") or {}).get(dim, {}).get("M") or {}
        return int(cobertura.get("covered") or 0) >= int(cobertura.get("total") or len(requisitos))

    output = io.StringIO(newline="")
    writer = csv.writer(output, quoting=csv.QUOTE_ALL)
    writer.writerow(cabecalho)
    for indice, sugestao in enumerate(run.get("sugestoes") or []):
        scores = sugestao.get("_scores") or {}
        ids = sugestao.get("best_team") or []
        fitness = float(sugestao.get("best_fitness") or 0)
        dom_ok = must_ok(sugestao, "dominio")
        eco_ok = must_ok(sugestao, "ecossistema")
        ling_ok = must_ok(sugestao, "linguagens")
        writer.writerow([
            sugestao.get("ranking", indice + 1), run.get("project_id", ""),
            run.get("nome_projeto", ""), f"{fitness:.8f}", f"{fitness * 100:.2f}",
            _score_label(fitness), json.dumps(ids, ensure_ascii=False),
            " | ".join(m.get("id", "") for m in sugestao.get("membros") or []),
            lista("dominio", "must"), lista("dominio", "should"), lista("dominio", "could"),
            lista("ecossistema", "must"), lista("ecossistema", "should"), lista("ecossistema", "could"),
            lista("linguagens", "must"), lista("linguagens", "should"), lista("linguagens", "could"),
            scores.get("dominio", {}).get("score"), scores.get("dominio", {}).get("rotulo"),
            scores.get("ecossistema", {}).get("score"), scores.get("ecossistema", {}).get("rotulo"),
            scores.get("linguagens", {}).get("score"), scores.get("linguagens", {}).get("rotulo"),
            sugestao.get("_at_score"), sugestao.get("_at_label"),
            sugestao.get("_ac_score"), sugestao.get("_ac_label"),
            dom_ok, eco_ok, ling_ok, dom_ok and eco_ok and ling_ok,
            sugestao.get("seed", run.get("seed")), sugestao.get("best_generation", run.get("best_generation")),
            sugestao.get("duration_sec", run.get("duration_sec")),
            sugestao.get("gens_executed", run.get("gens_executed")),
            sugestao.get("stop_reason", run.get("stop_reason")),
            sugestao.get("population_size", run.get("population_size")),
            sugestao.get("max_generations", run.get("max_generations")),
            sugestao.get("mutation_rate", run.get("mutation_rate")),
            sugestao.get("crossover_rate", run.get("crossover_rate")),
            sugestao.get("elitism_count", run.get("elitism_count")),
            sugestao.get("stable_gens", run.get("stable_gens")),
            sugestao.get("crossover_operator", run.get("crossover_operator")),
            sugestao.get("timestamp", run.get("timestamp")), run_id,
        ])

    nome = re.sub(r"[^a-zA-Z0-9_-]+", "_", run.get("nome_projeto") or "projeto").strip("_").lower()
    filename = f"teamplus_{nome or 'projeto'}_20_equipes.csv"
    return Response(
        "\ufeff" + output.getvalue(),
        content_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )

@app.route("/historico")
def historico():
    hist = _read_hist()
    return render_template("historico.html", historico=hist)


@app.route("/perfis")
def perfis():
    devs = _load_db()
    resumo = [{
        "id":          f"Dev{d.get('user_id', d.get('id', ''))}",
        "role":        d.get("contractRoleName", "—"),
        "dominio":     d.get("dominio", []),
        "ecossistema": d.get("ecossistema", []),
        "linguagens":  d.get("linguagens", []),
        "metodologia": d.get("methodology", []),
    } for d in devs]
    return render_template("perfis.html", devs=resumo)


@app.route("/api/devs")
def api_devs():
    return jsonify(_load_db())

@app.route("/api/extrair_projeto", methods=["POST"])
def api_extrair_projeto():
    """
    Recebe descrição em linguagem natural e retorna projeto_alvo estruturado.
    Body: { "descricao": "texto livre do gestor" }
    """
    import anthropic
    data      = request.get_json(silent=True) or {}
    descricao = data.get("descricao", "").strip()
    if not descricao:
        return jsonify({"erro": "Descrição vazia"}), 400

    prompt = f"""Você é um assistente especializado em formação de equipes de software.

        O gestor descreveu o seguinte projeto:
        "{descricao}"

        Sua tarefa: extrair as tecnologias ESSENCIAIS e classificá-las nos três clusters abaixo.

        REGRA DE CLASSIFICAÇÃO (aplique nesta ordem):
        1. Se a tecnologia DEFINE O CONTEXTO do sistema → Domínio de Aplicação
        2. Se a tecnologia é usada para IMPLEMENTAR OU OPERAR o sistema → Ecossistema
        3. Se a tecnologia é usada para ESCREVER CÓDIGO → Linguagem

        CLUSTER 1 - DOMÍNIO DE APLICAÇÃO:
        Use APENAS estes valores controlados (escolha os mais relevantes):
        Mobile | Web | Cloud | IoT | IA | Blockchain | XR | Game | Desktop-Standalone | Desktop-Client | Microeletrônica | BCI
        - Máximo 2 itens em must. should e could sempre vazios.
        - NUNCA invente domínios fora desta lista.
        - Inferências obrigatórias: "conversacional/chatbot/LLM" → IA | "app mobile/iOS/Android" → Mobile | "nuvem/corporativo/SaaS" → Cloud | "realidade aumentada/virtual" → XR | "jogo/game" → Game | "embarcado/sensor/Arduino" → IoT

        CLUSTER 2 - ECOSSISTEMA DE DESENVOLVIMENTO:
        Frameworks, plataformas, ferramentas, APIs, bibliotecas, infraestrutura.
        Exemplos: React, Node.js, Docker, AWS Lambda, TensorFlow, Firebase, Flutter, Unity, Stripe API
        - Máximo 2 itens em must. should e could sempre vazios.
        - NUNCA coloque aqui valores do Domínio como "IA", "Mobile", "Cloud" ou frases descritivas.

        CLUSTER 3 - LINGUAGENS DE PROGRAMAÇÃO:
        Apenas linguagens para escrever código.
        Exemplos: JavaScript, Python, Swift, Kotlin, Java, C#, C++, Dart, TypeScript
        - Máximo 2 itens em must. should e could sempre vazios.

        EXEMPLOS COMPLETOS:
        - "app iOS de reconhecimento facial" → dominio: [Mobile, IA] | ecossistema: [CoreML, UIKit] | linguagens: [Swift]
        - "plataforma web de e-commerce em nuvem" → dominio: [Web, Cloud] | ecossistema: [React, Node.js] | linguagens: [JavaScript]
        - "chatbot corporativo com dashboard de dados" → dominio: [IA, Web] | ecossistema: [OpenAI API, React] | linguagens: [Python, JavaScript]
        - "jogo de realidade aumentada mobile" → dominio: [Mobile, XR] | ecossistema: [Unity, ARKit] | linguagens: [C#, Swift]
        - "sistema de monitoramento IoT com IA" → dominio: [IoT, IA] | ecossistema: [TensorFlow, MQTT] | linguagens: [Python]

        Responda SOMENTE com JSON válido, sem explicações, sem markdown.

        Formato exato:
        {{
        "dominio":     {{"must": [], "should": [], "could": []}},
        "ecossistema": {{"must": [], "should": [], "could": []}},
        "linguagens":  {{"must": [], "should": [], "could": []}}
        }}"""

    try:
        api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
        client  = anthropic.Anthropic(api_key=api_key)
        msg = client.messages.create(
            model      = "claude-haiku-4-5-20251001",
            max_tokens = 512,
            messages   = [{"role": "user", "content": prompt}]
        )
        raw  = msg.content[0].text.strip()
        # Remove possíveis backticks se o modelo os incluir
        raw  = raw.replace("```json", "").replace("```", "").strip()
        proj = _normalizar_taxonomia(json.loads(raw))
        return jsonify(proj)
    except json.JSONDecodeError:
        import traceback
        print("[ERRO EXTRAIR JSON]", traceback.format_exc())
        return jsonify({
            "erro": "Não foi possível interpretar as tecnologias extraídas. Tente novamente."
        }), 500
    except Exception:
        import traceback
        print("[ERRO EXTRAIR]", traceback.format_exc())
        return jsonify({
            "erro": "Não foi possível extrair as tecnologias agora. Tente novamente."
        }), 500

@app.route("/api/historico/<reg_id>", methods=["DELETE"])
def api_deletar(reg_id):
    hist = _read_hist()
    hist = [r for r in hist if r.get("id") != reg_id]
    _write_hist(hist)
    return jsonify({"ok": True})

@app.route("/api/historico/<reg_id>", methods=["GET"])
def api_get_registro(reg_id):
    hist = _read_hist()
    for r in hist:
        if r.get("id") == reg_id:
            return jsonify(r)
    return jsonify({"erro": "Não encontrado"}), 404

@app.route("/tecnologias")
def tecnologias():
    return render_template("tecnologias.html")


@app.route("/grafo")
def grafo():
    return render_template("grafo.html")



## ─────────────────────────────────────────────────────────────────────────────
# ── Grafo: serve Graph_Summary.json (gerado offline, ~40KB) ──────────────────
# Nunca lê o Graph_DB.json pesado em runtime.
# Para regenerar o summary: python gerar_summary.py

import math as _math

_SUMMARY      = None   # carregado uma vez na primeira request
_SUMMARY_LOCK = False  # flag simples (Flask é single-thread no Render free)
_GRAFO_CACHE  = {}     # (min_w, max_e) → resposta pronta


def _load_summary():
    global _SUMMARY
    if _SUMMARY is not None:
        return
    summary_path = STFP_ROOT / "Data" / "Graph_Summary.json"
    with open(summary_path, encoding="utf-8") as f:
        _SUMMARY = json.load(f)
    print(f"[GRAFO] Summary carregado: "
          f"{_SUMMARY['meta']['total_nodes']} nós, "
          f"{_SUMMARY['meta']['total_edges']} arestas totais, "
          f"{len(_SUMMARY['edges'])} arestas no visual.", flush=True)



# ── Grafo da equipe: lê Graph_DB_real uma vez para servir pares internos ──────
_GRAPH_DB      = None
_GRAPH_DB_PATH = STFP_ROOT / "Data" / "Graph_DB_real.json"

def _load_graph_db():
    global _GRAPH_DB
    if _GRAPH_DB is not None:
        return
    with open(_GRAPH_DB_PATH, encoding="utf-8") as f:
        raw = json.load(f)
    edges = raw.get("edges", [])
    mapa = {}
    for e in edges:
        u = e.get("source_user_id")
        v = e.get("target_user_id")
        if u is None or v is None:
            continue
        key = tuple(sorted([int(u), int(v)]))
        mapa[key] = {"weight": round(float(e.get("weight", 0)), 3),
                     "N": int(e.get("N", 0))}
    _GRAPH_DB = mapa
    print(f"[GRAFO_DB] {len(mapa)} arestas carregadas.", flush=True)


@app.route("/api/grafo/equipe", methods=["POST"])
def api_grafo_equipe():
    """
    Recebe lista de user_ids e retorna todas as arestas internas com weight e N.
    Body: { "team_ids": [int, ...] }
    """
    data     = request.get_json(silent=True) or {}
    team_ids = [int(x) for x in data.get("team_ids", [])]
    if not team_ids:
        return jsonify({"erro": "team_ids vazio"}), 400

    _load_graph_db()

    from itertools import combinations
    pares = []
    for a, b in combinations(sorted(team_ids), 2):
        key  = tuple(sorted([a, b]))
        edge = _GRAPH_DB.get(key)
        pares.append({
            "source":  a,
            "target":  b,
            "weight":  edge["weight"] if edge else 0.0,
            "N":       edge["N"]      if edge else 0,
            "has_edge": edge is not None,
        })
    return jsonify({"pares": pares})


@app.route("/api/grafo")
def api_grafo():
    min_w     = round(float(request.args.get("min_w", 0.5)), 2)
    max_e     = int(request.args.get("max_e", 300))
    cache_key = (min_w, max_e)

    if cache_key in _GRAFO_CACHE:
        return jsonify(_GRAFO_CACHE[cache_key])

    _load_summary()

    # Filtra arestas do summary (já são top-400 — operação rápida)
    edges = [e for e in _SUMMARY["edges"] if e["weight"] >= min_w][:max_e]

    ids_usados = {e["source"] for e in edges} | {e["target"] for e in edges}
    total      = max(len(ids_usados), 1)

    # Posição circular — D3 force refina no browser
    pos_map = {
        nid: (
            round(500 + 420 * _math.cos(2 * _math.pi * i / total), 2),
            round(500 + 420 * _math.sin(2 * _math.pi * i / total), 2),
        )
        for i, nid in enumerate(sorted(ids_usados))
    }

    nodes_out = [
        {**n, "x": pos_map[n["id"]][0], "y": pos_map[n["id"]][1]}
        for n in _SUMMARY["nodes"] if n["id"] in ids_usados
    ]

    result = {
        "nodes":       nodes_out,
        "edges":       edges,
        "total_nodes": _SUMMARY["meta"]["total_nodes"],
        "total_edges": _SUMMARY["meta"]["total_edges"],
    }
    _GRAFO_CACHE[cache_key] = result
    return jsonify(result)


@app.route("/api/grafo/conexoes/<node_id>")
def api_grafo_conexoes(node_id):
    """Dados do nó vindos do summary — zero I/O, zero CPU."""
    _load_summary()

    node = next((n for n in _SUMMARY["nodes"] if n["id"] == node_id), None)
    if not node:
        return jsonify({"erro": "Nó não encontrado"}), 404

    return jsonify(node)
@app.route("/api/explicar", methods=["POST"])
def api_explicar():
    import anthropic
    data         = request.get_json(silent=True) or {}
    team_ids     = [int(x) for x in data.get("team_ids", [])]
    projeto_alvo = data.get("projeto_alvo", {})
    scores       = data.get("scores", {})
    fitness      = data.get("fitness", 0)
    nome_projeto = data.get("nome_projeto", "")

    devs    = _load_db()
    perfis  = [_dev_info(i, devs) for i in team_ids]

    # Monta contexto rico para o modelo
    perfis_txt = "\n".join([
        f"- {p['id']} ({p['role']}): "
        f"domínio={p['dominio']}, "
        f"ecossistema={p['ecossistema']}, "
        f"linguagens={p['linguagens']}"
        for p in perfis
    ])

    scores_txt = ""
    for dim, val in scores.items():
        if isinstance(val, dict):
            scores_txt += f"  {dim}: {val.get('rotulo','—')} ({val.get('score','—')})\n"

    ac = data.get("ac_label","—")
    ac_score = data.get("ac_score","—")

    prompt = f"""Você é um assistente especializado em formação de equipes de software.

        O GA sugeriu a seguinte equipe para o projeto "{nome_projeto}":

        PERFIS DOS MEMBROS:
        {perfis_txt}

        PROJETO ALVO:
        - Domínio MUST: {projeto_alvo.get('dominio',{}).get('must',[])}
        - Ecossistema MUST: {projeto_alvo.get('ecossistema',{}).get('must',[])}
        - Linguagens MUST: {projeto_alvo.get('linguagens',{}).get('must',[])}

        SCORES OBTIDOS:
        {scores_txt}  Aptidão Colaborativa (AC): {ac} ({ac_score})
        Fitness geral: {round(float(fitness)*100)}%

        Escreva uma justificativa curta (máximo 4 frases) explicando:
        1. Por que esta equipe cobre os requisitos técnicos do projeto
        2. Um ponto forte e um ponto de atenção da equipe
        3. Se a aptidão colaborativa favorece ou não o trabalho conjunto
            
        Seja direto e técnico. Não use markdown, não use bullet points. Apenas parágrafos."""

    try:
        api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
        client  = anthropic.Anthropic(api_key=api_key)
        msg = client.messages.create(
            model      = "claude-haiku-4-5-20251001",
            max_tokens = 300,
            messages   = [{"role": "user", "content": prompt}]
        )
        return jsonify({"explicacao": msg.content[0].text.strip()})
    except Exception:
        import traceback
        print("[ERRO EXPLICAR]", traceback.format_exc())
        return jsonify({
            "erro": "Não foi possível gerar a explicação agora. Tente novamente."
        }), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)
