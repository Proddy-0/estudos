import math

valor = float(input("Digite o valor a ser arredondado: "))
escolha = int(input("Escolha o tipo de arredondamento: \n"
                    "1 - Milionésimo,\n"
                    "2 - Centésimos de milésimos,\n"
                    "3 - Décimos de milésimos,\n"
                    "4 - Milésimos,\n"
                    "5 - Centésimos,\n"
                    "6 - Décimos,\n"
                    "7 - Unidade,\n"
                    "8 - Dezena,\n"
                    "9 - Centena,\n"
                    "10 - Milhar,\n"
                    "11 - Dezena de milhar,\n"
                    "12 - Centena de milhar,\n"
                    "13 - Milhão.\n"))
                    
unidades = {
    1: "milionésimos",
    2: "centésimos de milésimos",
    3: "décimos de milésimos",
    4: "milésimos",
    5: "centésimos",
    6: "décimos",
    7: "unidades",
    8: "dezenas",
    9: "centenas",
    10: "milhares",
    11: "dezenas de milhar",
    12: "centenas de milhar",
    13: "milhões"
}

if escolha in unidades:
    if escolha <= 6:
        fator = 10 ** (7 - escolha)
        valor_final = int(math.floor(valor * fator + 0.5))
    else:
        arredondado = round(valor, -(escolha - 7))
        valor_final = int(arredondado / (10 ** (escolha - 7)))
    
    print(f"O valor arredondado é: {valor_final} {unidades[escolha]}")
else:
    print("Opção inválida")

print("Fim do programa")
