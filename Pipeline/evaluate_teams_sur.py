# evaluate_teams_sur.py
#
# Avaliador surrogate de equipes — substitui evaluate_teams.py (BN)
# Interface idêntica: avaliar_equipe_surrogate(team_ids, projeto_alvo, log)
# Retorna as mesmas chaves que avaliar_equipe() para compatibilidade com o GA.
# -------------------------------------------------------------------

from __future__ import annotations
import sys, os, json, re
from pathlib import Path
from itertools import combinations

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
BASE_DIR = Path(__file__).resolve().parents[1]  # .../STFP

from Feature_Extraction.Dimension_Scoring.dimension_scoring import avaliar_todos_as_dimensions
from Feature_Extraction.PC_Transformer.pc_transformer import classificar_pc_por_faixa
from Algorithms.Surrogate.team_fit_surrogate import TeamFitSurrogate

# -------------------------------------------------------------------
# Paths
# -------------------------------------------------------------------
WEIGHTS_PATH = BASE_DIR / "Feature_Extraction" / "Dimension_Scoring" / "pesos_calibrados.json"
DB_PATH      = BASE_DIR / "Data" / "base_final.json"
GRAPH_PATH   = BASE_DIR / "Data" / "Graph_DB_real.json"

# Parâmetros calibrados da surrogate
# Atualiza este caminho após rodar calibrate_surrogate_teacher_bn.py
PARAMS_PATH  = (BASE_DIR / "Calibration_surrogate" / "BN_Teacher"
                / "results_teacher_bn" / "best_params_teacher_bn.json")

# -------------------------------------------------------------------
# Pesos calibrados de dimension_scoring (carregados 1x)
# -------------------------------------------------------------------
with open(WEIGHTS_PATH, "r", encoding="utf-8") as f:
    PESOS = json.load(f)
print(f"[SURROGATE] Pesos de dimensão carregados: {WEIGHTS_PATH}")

# -------------------------------------------------------------------
# Surrogate singleton (carregado 1x, igual ao BN singleton)
# -------------------------------------------------------------------
_SUR_SINGLETON: TeamFitSurrogate | None = None

def get_surrogate() -> TeamFitSurrogate:
    global _SUR_SINGLETON
    if _SUR_SINGLETON is None:
        if PARAMS_PATH.exists():
            _SUR_SINGLETON = TeamFitSurrogate.from_params_file(PARAMS_PATH)
            print(f"[SURROGATE] Parâmetros carregados de {PARAMS_PATH}")
        else:
            _SUR_SINGLETON = TeamFitSurrogate.from_default()
            print("[SURROGATE] AVISO: params não encontrado, usando defaults.")
        print(f"[SURROGATE] {_SUR_SINGLETON}")
    return _SUR_SINGLETON

# -------------------------------------------------------------------
# DB (normalizado, carregado 1x)
# -------------------------------------------------------------------
def _as_list(v):
    if v is None: return []
    if isinstance(v, list): return v
    if isinstance(v, str): return [v] if v else []
    return []

def _normalizar_db(db_raw):
    devs = db_raw if isinstance(db_raw, list) else db_raw.get("developers", [])
    norm = []
    for d in devs:
        d2 = dict(d)
        try: d2["id"] = int(d2.get("id") or d2.get("user_id"))
        except Exception: pass
        d2["dominio"] = _as_list(d2.get("dominio"))
        eco = _as_list(d2.get("ecossistema"))
        lig = _as_list(d2.get("linguagens"))
        d2["ecossistema_list"] = eco
        d2["linguagens_list"]  = lig
        d2["ecossistema"] = eco
        d2["linguagens"]  = lig
        norm.append(d2)
    return {"developers": norm}

with open(DB_PATH, "r", encoding="utf-8") as f:
    _db_raw = json.load(f)
if isinstance(_db_raw, list):
    _db_raw = {"developers": _db_raw}
DB_NORM = _normalizar_db(_db_raw)

# -------------------------------------------------------------------
# Grafo de compatibilidade (carregado 1x)
# -------------------------------------------------------------------
def _as_int(x):
    if x is None: return None
    if isinstance(x, int): return x
    m = re.search(r"(\d+)$", str(x))
    return int(m.group(1)) if m else None

def _carregar_grafo(path: Path) -> dict:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    edges = (data.get("edges") or data.get("links")
             if isinstance(data, dict) else data)
    mapa = {}
    for e in (edges or []):
        u = _as_int(e.get("source_user_id")) or _as_int(e.get("source"))
        v = _as_int(e.get("target_user_id")) or _as_int(e.get("target"))
        if u is None or v is None: continue
        try: w = float(e.get("weight", 0.0))
        except Exception: continue
        a, b = (u, v) if u < v else (v, u)
        mapa[(a, b)] = max(mapa.get((a, b), 0.0), w)
    return mapa

MAPA_GRAFO = _carregar_grafo(GRAPH_PATH)

def _carregar_grafo_n(path: Path) -> dict:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    edges = (data.get("edges") or data.get("links")
             if isinstance(data, dict) else data)
    mapa = {}
    for e in (edges or []):
        u = _as_int(e.get("source_user_id")) or _as_int(e.get("source"))
        v = _as_int(e.get("target_user_id")) or _as_int(e.get("target"))
        if u is None or v is None:
            continue
        try:
            n = int(e.get("N", 0))
        except Exception:
            continue
        a, b = (u, v) if u < v else (v, u)
        mapa[(a, b)] = mapa.get((a, b), 0) + n
    return mapa

MAPA_N_GRAFO = _carregar_grafo_n(GRAPH_PATH)

def _pcs_da_equipe(team_ids: list, mapa: dict, default_pc: float = 0.3) -> list:
    team = [int(x) for x in team_ids]
    return [
        float(mapa.get((a, b) if a < b else (b, a), default_pc))
        for a, b in combinations(sorted(team), 2)
    ]

# -------------------------------------------------------------------
# Chaves de compatibilidade com evaluate_teams.py
# -------------------------------------------------------------------
PC_KEYS_5 = ("PC_VL", "PC_L", "PC_M", "PC_H", "PC_VH")

def _coverage_counts(feats):
    """Retorna {covered, total} para uma prioridade a partir das features Sit2."""
    if feats is None:
        return None
    P     = feats.get("P", [])
    hitsP = feats.get("hitsP", {})
    covered = sum(1 for t in P if hitsP.get(t, 0) >= 1)
    return {"covered": covered, "total": len(P)}

# -------------------------------------------------------------------
# Função principal — mesma assinatura que avaliar_equipe()
# -------------------------------------------------------------------
def avaliar_equipe_surrogate(team_ids: list,
                              projeto_alvo: dict,
                              log: bool = True) -> dict:
    """
    Avalia uma equipe usando o surrogate analítico (MIXMINMAX).

    Retorna dict com as mesmas chaves que avaliar_equipe() em
    evaluate_teams.py, garantindo compatibilidade com o GA:
        media_AE, distribuicao, AT_cont, AC_cont,
        scores, pcs, pc_props, pc_score, pc_label
    """
    sur = get_surrogate()

    # 1) Dimension scoring (idêntico à BN)
    dims = avaliar_todos_as_dimensions(
        team_ids=team_ids,
        db=DB_NORM,
        projeto_alvo=projeto_alvo,
        pesos=PESOS,
        nota_sem_must=0.0,
    )

    D    = dims["dominio"]["score"]
    E    = dims["ecossistema"]["score"]
    L    = dims["linguagens"]["score"]
    Lrot = dims["linguagens"]["rotulo"]

    # Se não há rótulo de linguagem (sem prioridades no projeto) → None
    L_eff = None if Lrot is None else L

    # Garante que D e E nunca são None (fallback neutro)
    D = 0.5 if D is None else float(D)
    E = 0.5 if E is None else float(E)

    # Coverage M/S/C — calculado a partir das features de debug do dimension_scoring
    coverage = {}
    for _dim in ("dominio", "ecossistema", "linguagens"):
        _dbg = dims[_dim].get("debug", {})
        _sit = _dbg.get("sit", "")
        if "sit2+sit1" in _sit:
            coverage[_dim] = {
                "M": _coverage_counts(_dbg.get("featsM")),
                "S": _coverage_counts(_dbg.get("featsS")),
                "C": _coverage_counts(_dbg.get("featsC")),
            }
        elif "sit2-only" in _sit:
            _prio = _dbg.get("priority", "must")
            _fm   = _dbg.get("feats")
            coverage[_dim] = {
                "M": _coverage_counts(_fm) if _prio == "must"   else None,
                "S": _coverage_counts(_fm) if _prio == "should" else None,
                "C": _coverage_counts(_fm) if _prio == "could"  else None,
            }
        else:
            coverage[_dim] = {"M": None, "S": None, "C": None}

    # 2) Compatibilidade dos pares via grafo
    _team_sorted = sorted([int(x) for x in team_ids])
    pcs   = _pcs_da_equipe(team_ids, MAPA_GRAFO, default_pc=0.3)
    props = classificar_pc_por_faixa(pcs)

    _n_total = len(list(combinations(_team_sorted, 2)))
    _n_colab = sum(
        1 for a, b in combinations(_team_sorted, 2)
        if MAPA_GRAFO.get((a, b), 0) > 0
    )
    _n_proj = sum(
        MAPA_N_GRAFO.get((a, b), 0)
        for a, b in combinations(_team_sorted, 2)
        if MAPA_GRAFO.get((a, b), 0) > 0
    )
    pares_info = {"n_total": _n_total, "n_colab": _n_colab, "n_proj": _n_proj}
    ac_dist = [props["PC_VL"], props["PC_L"], props["PC_M"],
               props["PC_H"], props["PC_VH"]]

    # pc_score e pc_label (para log e compatibilidade — não entram no surrogate)
    from Feature_Extraction.PC_Transformer.pc_transformer import (
        pc_score_from_props, pc_label_from_score
    )
    pc_score = pc_score_from_props(props)
    pc_label = pc_label_from_score(pc_score)

    # 3) Surrogate
    result = sur.evaluate(D, E, L_eff, ac_dist)

    out = {
        # Campos principais (compatíveis com o GA)
        "media_AE":    result["media_AE"],
        "distribuicao": result["distribuicao"],
        "AT_cont":     result["AT_cont"],
        "AC_cont":     result["AC_cont"],

        # Campos extras (compatíveis com CSV/relatório do GA)
        "scores":   dims,
        "pcs":      pcs,
        "pc_props": {k: float(props.get(k, 0.0)) for k in PC_KEYS_5},
        "pc_score": float(pc_score),
        "pc_label": str(pc_label),

        # Campos de cobertura e pares (alinhados com evaluate_teams.py)
        "coverage":   coverage,
        "pares_info": pares_info,

        # Campos específicos do surrogate
        "AE_sur":   result["AE_sur"],
        "AT_sur":   result["AT_sur"],
    }

    if log:
        def _f(x): return f"{x:.3f}" if x is not None else "None"
        dom_r = dims["dominio"]["rotulo"]
        eco_r = dims["ecossistema"]["rotulo"]
        ling_r = dims["linguagens"]["rotulo"]
        print(f"\n[Surrogate] Equipe: {team_ids}")
        print(f"  Dom={dom_r}({_f(D)}) | Eco={eco_r}({_f(E)}) | Ling={ling_r}({_f(L_eff)})")
        print(f"  AC_cont={_f(result['AC_cont'])} (pc_label={pc_label})")
        print(f"  AT_sur={_f(result['AT_sur'])} | AE_sur={_f(result['AE_sur'])}")
        print(f"  dist_AE={[round(x,4) for x in result['distribuicao']]}")

    return out


# -------------------------------------------------------------------
# Main de teste
# -------------------------------------------------------------------
if __name__ == "__main__":
    PROJETO_ALVO = {
        "dominio":     {"must": ["Web"], "should": ["Cloud"], "could": []},
        "ecossistema": {"must": ["React"], "should": ["AWS Lambda"], "could": []},
        "linguagens":  {"must": ["JavaScript"], "should": ["TypeScript"], "could": []},
    }
    teams = [[14, 77, 97, 261]]
    for t in teams:
        avaliar_equipe_surrogate(t, PROJETO_ALVO, log=True)
