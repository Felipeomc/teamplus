"""
gerar_summary.py — Rode UMA VEZ localmente (ou no deploy como build step).

Lê:  Data/Graph_DB.json  (pesado, 126k arestas)
Gera: Data/Graph_Summary.json  (leve, ~40KB)

O servidor Flask passa a servir só o Summary, nunca o DB completo.

Uso:
    python gerar_summary.py
    # ou, a partir da raiz do projeto:
    python web/gerar_summary.py
"""

import json, math
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent  # web/ → STFP/
#ROOT       = Path(__file__).resolve().parent.parent.parent  # web/templates/ → web/ → STFP/
INPUT      = ROOT / "Data" / "Graph_DB_real.json"
OUTPUT     = ROOT / "Data" / "Graph_Summary.json"

TOP_K      = 8     # top-K vizinhos por nó (aumentar se quiser mais detalhe)
MIN_WEIGHT = 0.0   # considera todas as arestas para escolher os top-K

print(f"Lendo {INPUT} …")
with open(INPUT, encoding="utf-8") as f:
    raw = json.load(f)

nodes = raw["nodes"]
edges = raw["edges"]
print(f"  {len(nodes)} nós, {len(edges)} arestas")

# ── Índice: node_id → lista de (vizinho, weight, N) ordenada por weight desc ──
adj = defaultdict(list)
for e in edges:
    w = e.get("weight", 0)
    if w < MIN_WEIGHT:
        continue
    adj[e["source"]].append((e["target"], w, e.get("N", 1)))
    adj[e["target"]].append((e["source"], w, e.get("N", 1)))

# Ordena e mantém top-K por nó
for nid in adj:
    adj[nid].sort(key=lambda x: x[1], reverse=True)
    adj[nid] = adj[nid][:TOP_K]

# ── Estatísticas agregadas por nó ──────────────────────────────────────────────
node_stats = {}
for e in edges:
    for (me, other) in [(e["source"], e["target"]), (e["target"], e["source"])]:
        if me not in node_stats:
            node_stats[me] = {"total_conns": 0, "weight_sum": 0.0, "weight_max": 0.0}
        s = node_stats[me]
        s["total_conns"] += 1
        s["weight_sum"]  += e.get("weight", 0)
        s["weight_max"]   = max(s["weight_max"], e.get("weight", 0))

# ── Monta nodes enriquecidos ───────────────────────────────────────────────────
nodes_out = []
for n in nodes:
    nid   = n["id"]
    stats = node_stats.get(nid, {"total_conns":0,"weight_sum":0.0,"weight_max":0.0})
    tc    = stats["total_conns"]
    nodes_out.append({
        "id":               nid,
        "contractRoleName": n.get("contractRoleName", ""),
        "hardskill":        n.get("hardskill", [])[:8],
        "total_conns":      tc,
        "weight_avg":       round(stats["weight_sum"] / tc, 3) if tc else 0,
        "weight_max":       round(stats["weight_max"], 3),
        "top_neighbors": [
            {"id": nb, "weight": round(w, 3), "N": N}
            for nb, w, N in adj.get(nid, [])
        ],
    })

# ── Arestas globais: só as top-400 por peso (para o grafo visual) ─────────────
top_edges = sorted(edges, key=lambda e: e.get("weight", 0), reverse=True)[:400]
edges_out = [
    {
        "source": e["source"],
        "target": e["target"],
        "weight": round(e.get("weight", 0), 3),
        "N":      e.get("N", 1),
    }
    for e in top_edges
]

summary = {
    "meta": {
        "total_nodes":  len(nodes),
        "total_edges":  len(edges),
        "top_k":        TOP_K,
        "top_edges_n":  len(edges_out),
    },
    "nodes": nodes_out,
    "edges": edges_out,
}

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(summary, f, ensure_ascii=False, separators=(",", ":"))

size_kb = OUTPUT.stat().st_size / 1024
print(f"✓ Gerado: {OUTPUT}")
print(f"  {len(nodes_out)} nós · {len(edges_out)} arestas top · {size_kb:.1f} KB")
print(f"  (era {INPUT.stat().st_size/1024:.0f} KB — redução de {INPUT.stat().st_size/OUTPUT.stat().st_size:.0f}x)")