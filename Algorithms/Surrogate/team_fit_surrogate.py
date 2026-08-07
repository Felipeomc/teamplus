# Algorithms/Surrogate/team_fit_surrogate.py
#
# Surrogate analítico que imita a BN de Team Fit.
#
# Estrutura espelha team_fit_bn.py:
#   AT_sur  : WMEAN(Dom, Eco, Ling)  com pesos [3, 1, 5]  (igual à BN)
#   AE_sur  : MIXMINMAX(AT_sur, AC_cont) com pesos [w_min, w_max]
#
# Os parâmetros w_min, w_max e sigma_ae são carregados de
# best_params_teacher_bn.json após a calibração.
# -------------------------------------------------------------------

from __future__ import annotations
import json
import math
from pathlib import Path
from typing import List, Dict, Any

# -------------------------------------------------------------------
# Centróides ordinais (VL L M H VH)
# -------------------------------------------------------------------
CENTROIDES: List[float] = [0.1, 0.3, 0.5, 0.7, 0.9]

# -------------------------------------------------------------------
# Pesos técnicos fixos — espelham a WMEAN da BN atual
# -------------------------------------------------------------------
W_DOM_DEFAULT  = 3
W_ECO_DEFAULT  = 1
W_LING_DEFAULT = 5

# -------------------------------------------------------------------
# Funções núcleo
# -------------------------------------------------------------------

def at_surrogate(Dom: float, Eco: float, Ling: float | None,
                 w_dom: int = W_DOM_DEFAULT,
                 w_eco: int = W_ECO_DEFAULT,
                 w_ling: int = W_LING_DEFAULT,
                 missing_ling: float = 0.5) -> float:
    """
    WMEAN(Dom, Eco, Ling) — replica a função WMEAN da BN no nó AT.
    Se Ling for None (sem prioridades no projeto), usa missing_ling como neutro.
    """
    L_eff = missing_ling if Ling is None else float(Ling)
    return (w_dom * float(Dom) + w_eco * float(Eco) + w_ling * L_eff) / (w_dom + w_eco + w_ling)


def ac_continuo(ac_dist: List[float]) -> float:
    """
    Valor esperado da distribuição de compatibilidade entre pares.
    ac_dist = [p_VL, p_L, p_M, p_H, p_VH]  (soma = 1)
    """
    return float(sum(p * v for p, v in zip(ac_dist, CENTROIDES)))


def ae_mixminmax(AT: float, AC: float,
                 w_min: int = 5,
                 w_max: int = 1) -> float:
    """
    MIXMINMAX(AT, AC) — replica a função MIXMINMAX da BN no nó AE.
    weights[0] = w_min  →  aplica ao atributo mais fraco (gargalo)
    weights[1] = w_max  →  aplica ao atributo mais forte
    """
    mn = min(AT, AC)
    mx = max(AT, AC)
    return (w_min * mn + w_max * mx) / (w_min + w_max)


def _norm_cdf(z: float) -> float:
    return 0.5 * (1.0 + math.erf(z / math.sqrt(2.0)))


def ae_to_dist(ae_mean: float, sigma: float) -> List[float]:
    """
    Converte o escalar AE_sur em distribuição de 5 estados via
    gaussiana truncada projetada sobre os bins [0,0.2,0.4,0.6,0.8,1].
    sigma=0  →  one-hot no centróide mais próximo.
    """
    if sigma is None or sigma <= 1e-9:
        k = min(range(5), key=lambda i: abs(CENTROIDES[i] - ae_mean))
        dist = [0.0] * 5
        dist[k] = 1.0
        return dist

    bins = [-1e9, 0.2, 0.4, 0.6, 0.8, 1e9]
    ps = []
    for i in range(5):
        lo, hi = bins[i], bins[i + 1]
        p = (_norm_cdf((hi - ae_mean) / sigma)
             - _norm_cdf((lo - ae_mean) / sigma))
        ps.append(max(0.0, p))
    s = sum(ps)
    return [p / s for p in ps] if s > 0 else [0.2] * 5


# -------------------------------------------------------------------
# Classe principal — interface semelhante à BN
# -------------------------------------------------------------------

class TeamFitSurrogate:
    """
    Avaliador surrogate de Team Fit.

    Uso:
        sur = TeamFitSurrogate.from_params_file("best_params_teacher_bn.json")
        ae_mean, ae_dist = sur.evaluate(Dom, Eco, Ling, ac_dist)
    """

    def __init__(self,
                 w_dom:  int   = W_DOM_DEFAULT,
                 w_eco:  int   = W_ECO_DEFAULT,
                 w_ling: int   = W_LING_DEFAULT,
                 w_min:  int   = 5,
                 w_max:  int   = 1,
                 sigma_ae: float = 0.15,
                 missing_ling: float = 0.5):
        self.w_dom   = w_dom
        self.w_eco   = w_eco
        self.w_ling  = w_ling
        self.w_min   = w_min
        self.w_max   = w_max
        self.sigma_ae = sigma_ae
        self.missing_ling = missing_ling

    # ------------------------------------------------------------------
    @classmethod
    def from_params_file(cls, params_path: str | Path) -> "TeamFitSurrogate":
        """Carrega parâmetros do JSON gerado pela calibração."""
        data = json.loads(Path(params_path).read_text(encoding="utf-8"))
        p = data.get("best_params", data)  # aceita summary.json ou best_params direto
        return cls(
            w_dom    = int(p.get("w_dom",   W_DOM_DEFAULT)),
            w_eco    = int(p.get("w_eco",   W_ECO_DEFAULT)),
            w_ling   = int(p.get("w_ling",  W_LING_DEFAULT)),
            w_min    = int(p.get("w_min",   5)),
            w_max    = int(p.get("w_max",   1)),
            sigma_ae = float(p.get("sigma_ae", 0.15)),
        )

    @classmethod
    def from_default(cls) -> "TeamFitSurrogate":
        """Instancia com parâmetros default (ponto de partida antes da calibração)."""
        return cls()

    # ------------------------------------------------------------------
    def evaluate(self,
                 Dom: float,
                 Eco: float,
                 Ling: float | None,
                 ac_dist: List[float]) -> Dict[str, Any]:
        """
        Avalia uma equipe e retorna dict compatível com o retorno da BN.

        Parâmetros
        ----------
        Dom, Eco, Ling : float in [0,1]  — scores contínuos de dimensão
        ac_dist        : list[5]          — proporções [p_VL, p_L, p_M, p_H, p_VH]

        Retorno
        -------
        {
            "AT_sur"    : float,
            "AC_cont"   : float,
            "AE_sur"    : float,       # escalar — uso como fitness no GA
            "dist_AE"   : list[5],     # distribuição de 5 estados
            "media_AE"  : float,       # alias de AE_sur (compat. com evaluate_teams.py)
            "distribuicao": list[5],   # alias de dist_AE (compat. com evaluate_teams.py)
        }
        """
        AT = at_surrogate(Dom, Eco, Ling,
                          self.w_dom, self.w_eco, self.w_ling,
                          self.missing_ling)
        AC = ac_continuo(ac_dist)
        AE = ae_mixminmax(AT, AC, self.w_min, self.w_max)
        dist = ae_to_dist(AE, self.sigma_ae)

        return {
            "AT_sur":      AT,
            "AC_cont":     AC,
            "AE_sur":      AE,
            "dist_AE":     dist,
            # aliases de compatibilidade com evaluate_teams.py / GA
            "media_AE":    AE,
            "distribuicao": dist,
            "AT_cont":     AT,
        }

    def __repr__(self):
        return (f"TeamFitSurrogate("
                f"w_dom={self.w_dom}, w_eco={self.w_eco}, w_ling={self.w_ling}, "
                f"w_min={self.w_min}, w_max={self.w_max}, sigma_ae={self.sigma_ae})")
