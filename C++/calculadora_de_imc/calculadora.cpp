#include <stdio.h>
main()
{
    float altura, peso, imc;
    printf("Digite sua altura: ");
    scanf("%f", &altura);
    printf("Digite seu peso: ");
    scanf("%f", &peso);
    imc = peso / (altura * altura);
    if (imc < 18.5)
    {
        printf("Peso (kg): %.2f\n", peso);
        printf("Altura (m): %.2f\n", altura);
        printf("Seu IMC é %.2f (Magreza).\n", imc);
    }
    else if (imc >= 18.5 && imc <= 24.9)
    {
        printf("Peso (kg): %.2f\n", peso);
        printf("Altura (m): %.2f\n", altura);
        printf("Seu IMC é %.2f (Saudável).\n", imc);
    }
    else if (imc >= 25.0 && imc <= 29.9)
    {
        printf("Peso (kg): %.2f\n", peso);
        printf("Altura (m): %.2f\n", altura);
        printf("Seu IMC é %.2f (Sobrepeso).\n", imc);
    }
    else
    {
        printf("Peso (kg): %.2f\n", peso);
        printf("Altura (m): %.2f\n", altura);
        printf("Seu IMC é %.2f (Obesidade).\n", imc);
    }
}