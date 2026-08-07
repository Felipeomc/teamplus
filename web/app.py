# web/app.py  — TeamPlus Flask App v2
import sys, os, json, uuid
from pathlib import Path
from datetime import datetime
from flask import Flask, render_template, request, jsonify


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

if not HIST_PATH.exists():
    HIST_PATH.write_text("[]", encoding="utf-8")

from Algorithms.GA.engine import run_ga_com_config
#from Pipeline.evaluate_teams import avaliar_equipe

from Pipeline.evaluate_teams_sur import avaliar_equipe_surrogate as avaliar_equipe

app = Flask(__name__)

# ── Helpers ───────────────────────────────────────────────────────────────────
def _load_db():
    with open(DB_PATH, encoding="utf-8") as f:
        raw = json.load(f)
    return raw if isinstance(raw, list) else raw.get("developers", [])

def _read_hist():
    try:
        return json.loads(HIST_PATH.read_text(encoding="utf-8"))
    except Exception:
        return []

def _write_hist(hist):
    HIST_PATH.write_text(json.dumps(hist, ensure_ascii=False, indent=2), encoding="utf-8")



def _read_backlog():
    try:
        return json.loads(BACKLOG_PATH.read_text(encoding="utf-8"))
    except Exception:
        return []

def _write_backlog(bl):
    BACKLOG_PATH.write_text(json.dumps(bl, ensure_ascii=False, indent=2), encoding="utf-8")

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
    """Roda o GA duas vezes (seeds diferentes) e retorna 2 sugestões."""
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

    team_size = int(data.get("team_size", 4))
    pop_size  = 150
    geracoes  = 200
    nome_proj = data.get("nome_projeto", "Projeto sem título")

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
    except Exception as e:
        import traceback
        print("[ERRO GA]", traceback.format_exc())
        return jsonify({"erro": f"Erro no GA: {str(e)}"}), 500

    devs = _load_db()
    sugestoes = []
    for t in res.get("top_teams", [{"team": res["best_team"], "fitness": res["best_fitness"]}]):
        ids     = [int(x) for x in t["team"]]
        membros = [_dev_info(i, devs) for i in ids]
        sugestoes.append({
            "timestamp":     datetime.now().strftime("%d/%m/%Y %H:%M"),
            "entrada":       entrada,
            "best_team":     ids,
            "membros":       membros,
            "best_fitness":  round(t["fitness"], 4),
            "gens_executed": res.get("gens_executed", 0),
            "duration_sec":  round(res.get("duration_sec", 0), 2),
            "stop_reason":   res.get("stop_reason", "—"),
        })
    return jsonify({
        "nome_projeto": nome_proj,
        "projeto_alvo": projeto_alvo,
        "sugestoes":    sugestoes,

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
        "ac_score": round(float(resultado.get("pc_score") or 0), 4),
        "ac_label": resultado.get("pc_label", "—"),
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
    nome_proj = data.get("nome_projeto", "Projeto sem título")

    registro = {
        "id":           datetime.now().strftime("%Y%m%d%H%M%S"),
        "status":       "alocado",
        "timestamp":    datetime.now().strftime("%d/%m/%Y %H:%M"),
        "nome_projeto": nome_proj,
        "projeto_alvo": data.get("projeto_alvo", {}),
        "best_team":    sugestao.get("best_team", []),
        "membros":      sugestao.get("membros", []),
        "best_fitness": sugestao.get("best_fitness", 0),
        "gens_executed":sugestao.get("gens_executed", 0),
        "duration_sec": sugestao.get("duration_sec", 0),
    }

    hist = _read_hist()
    hist.insert(0, registro)
    hist = hist[:100]
    _write_hist(hist)

    return jsonify({"ok": True, "id": registro["id"]})

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

    team_size     = int(data.get("team_size", 4))
    nome_proj     = data.get("nome_projeto", "Projeto sem título")
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
    except Exception as e:
        import traceback
        print("[ERRO GA FILA]", traceback.format_exc())
        return jsonify({"erro": f"Erro no GA: {str(e)}"}), 500

    devs      = _load_db()
    sugestoes = []
    for t in res.get("top_teams", [{"team": res["best_team"], "fitness": res["best_fitness"]}]):
        ids     = [int(x) for x in t["team"]]
        membros = [_dev_info(i, devs) for i in ids]
        sugestoes.append({
            "timestamp":     datetime.now().strftime("%d/%m/%Y %H:%M"),
            "best_team":     ids,
            "membros":       membros,
            "best_fitness":  round(t["fitness"], 4),
            "gens_executed": res.get("gens_executed", 0),
            "duration_sec":  round(res.get("duration_sec", 0), 2),
            "stop_reason":   res.get("stop_reason", "—"),
        })

    return jsonify({
        "nome_projeto": nome_proj,
        "projeto_alvo": projeto_alvo,
        "sugestoes":    sugestoes,
    })

@app.route("/api/backlog", methods=["GET"])
def api_backlog_get():
    return jsonify(_read_backlog())

@app.route("/api/backlog", methods=["POST"])
def api_backlog_add():
    data = request.get_json(silent=True) or {}
    bl   = _read_backlog()
    novo = {
        "id":           str(uuid.uuid4())[:8],
        "nome_projeto": data.get("nome_projeto", "Projeto sem título"),
        "projeto_alvo": data.get("projeto_alvo", {}),
        "team_size":    int(data.get("team_size", 4)),
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

@app.route("/api/backlog/reorder", methods=["POST"])
def api_backlog_reorder():
    order = request.get_json(silent=True) or []
    bl    = _read_backlog()
    bl_map = {x["id"]: x for x in bl}
    bl_new = [bl_map[i] for i in order if i in bl_map]
    _write_backlog(bl_new)
    return jsonify({"ok": True})

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
        proj = json.loads(raw)
        return jsonify(proj)
    except json.JSONDecodeError as e:
        return jsonify({"erro": f"IA retornou formato inválido: {e}"}), 500
    except Exception as e:
        import traceback
        print("[ERRO EXTRAIR]", traceback.format_exc())
        return jsonify({"erro": str(e)}), 500

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
    except Exception as e:
        import traceback
        print("[ERRO EXPLICAR]", traceback.format_exc())
        return jsonify({"erro": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)

