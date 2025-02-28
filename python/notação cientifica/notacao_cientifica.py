valor = float(input("Digite um valor que será transformado em notação cientifíca: "))
contador = 0
if valor == 0:
    print("O valor 0 em notação científica é: 0 x 10^0")
else:
    while abs(valor) >= 10 or abs(valor) < 1:
        if abs(valor) >= 10:
            valor /= 10
            contador += 1
        elif abs(valor) < 1:
            valor *= 10
            contador -= 1
    print(f"O valor em notação científica é: {valor} x 10^{contador}")
