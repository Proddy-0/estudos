base = int(input("Defina o valor da base: "))
expoente = int(input("Defina o valor do expoente: "))
valor = 1
verificador = 1
while verificador == 1:
    if expoente < 0:
     for i in range(1, abs(expoente) + 1):
            valor = valor / base
            print(base, "elevado a", -i, "=", valor)
    else:
     for i in range(1, expoente + 1):
            valor = valor * base
            print(base, "elevado a", i, "=", valor)
    verificador = int(input("Deseja continuar? 1 - Sim, 0 - Não: "))
    if verificador == 1:
        base = int(input("Defina o valor da base: "))
        expoente = int(input("Defina o valor do expoente: "))
        valor = 1
    else:exit()
print("Fim do programa")