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

    return jsonify({
        "node_id":       node_id,
        "total":         node["total_conns"],
        "media":         node["weight_avg"],
        "maximo":        node["weight_max"],
        "vizinhos":      [nb["id"] for nb in node["top_neighbors"]],
        "top_neighbors": node["top_neighbors"],
    })
