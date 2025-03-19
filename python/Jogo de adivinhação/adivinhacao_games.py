import random

a = int(input("Digite um número: "))
b = random.randint(1, 10)

while a != b:
    if a > b:
        print("O número é menor")
    else:
        print("O número é maior")
    a = int(input("Digite um número: "))
print("Parabéns, você acertou!")