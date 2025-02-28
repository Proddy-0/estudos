a = int (input("Entre com um número entre 1 a 10: "))
switch = {1: "um", 
          2: "dois", 
          3: "três", 
          4: "quatro", 
          5: "cinco", 
          6: "seis", 
          7: "sete", 
          8: "oito", 
          9: "nove", 
          10: "dez"}
print(switch.get(a, "Número inválido"))