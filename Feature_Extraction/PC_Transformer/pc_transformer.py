#pc_transformer.py
# Função para transformar os valores de compatibilidade entre pares (PC)
# em um vetor com as proporções de cada categoria: PC_VL, PC_L, PC_M, PC_H, PC_VH

def classificar_pc_por_faixa(pc_valores): 
    """
    Recebe uma lista de valores de compatibilidade de pares (entre 0 e 1)
    Retorna as proporções de cada categoria (PC_VL, PC_L, PC_M, PC_H, PC_VH)
    """
    # Inicializa contadores
    bins = {
        'PC_VL': 0,
        'PC_L': 0,
        'PC_M': 0,
        'PC_H': 0,
        'PC_VH': 0
    }

    total = len(pc_valores)
    if total == 0:
        raise ValueError("A lista de valores de PC não pode estar vazia.")

    for valor in pc_valores:
        if 0.0 <= valor < 0.2:
            bins['PC_VL'] += 1
        elif 0.2 <= valor < 0.4:
            bins['PC_L'] += 1
        elif 0.4 <= valor < 0.6:
            bins['PC_M'] += 1
        elif 0.6 <= valor < 0.8:
            bins['PC_H'] += 1
        elif 0.8 <= valor <= 1.0:
            bins['PC_VH'] += 1
        else:
            raise ValueError(f"Valor fora da faixa esperada (0 a 1): {valor}")

    # Converte contagens em proporções
    proporcoes = {k: v / total for k, v in bins.items()}
    return proporcoes

# ============================================================
# EXTENSÃO: além das proporções, retorna pc_score único + label
# ============================================================

PC_KEYS_5 = ("PC_VL", "PC_L", "PC_M", "PC_H", "PC_VH")
_CENTROIDES = [0.1, 0.3, 0.5, 0.7, 0.9]
_LABELS = ["VL", "L", "M", "H", "VH"]





def pc_score_from_props(props: dict,
                        pesos_pc=(1, 1, 4, 4, 5),
                        keys=PC_KEYS_5) -> float:
    p = [float(props.get(k, 0.0)) for k in keys]
    s = sum(p)
    if s <= 0.0:
        return 0.5  # neutro se não tiver info

    p = [x / s for x in p]  # normaliza

    raw_1to5 = sum(w * x for w, x in zip(pesos_pc, p))  # [1..5]
    norm01 = (raw_1to5 - 1.0) / 4.0                    # [0..1]
    score = 0.1 + 0.8 * norm01                          # [0.1..0.9]
    return float(score)

def pc_label_from_score(score: float) -> str:
    i = min(range(5), key=lambda k: abs(float(score) - _CENTROIDES[k]))
    return _LABELS[i]

def classificar_pc_por_faixa_e_score(pc_valores, pesos_pc=(1, 1, 4, 4, 5)):
    """
    Recebe pc_valores (lista de PCs em [0..1]) e retorna:
      - props: proporções PC_VL..PC_VH
      - pc_score: score único [0.1..0.9]
      - pc_label: VL/L/M/H/VH (mais próximo dos centroides)
    """
    props = classificar_pc_por_faixa(pc_valores)  # mantém tua função original
    score = pc_score_from_props(props, pesos_pc=pesos_pc)
    label = pc_label_from_score(score)
    
    return {"props": props, "pc_score": score, "pc_label": label}


# Exemplo de uso:
if __name__ == "__main__":
    pc_exemplo = [0.9, 0.3, 0.8, 0.2, 0.3, 0.9] # Compatibilidades entre pares da equipe
    print(pc_exemplo)
    res = classificar_pc_por_faixa_e_score(pc_exemplo)
    props = res["props"]
    pc_score = res["pc_score"]
    pc_label = res["pc_label"]

    
    print("props:",props)
    print("pc_score:",pc_score)
    print("pc_label:",pc_label)

    

 