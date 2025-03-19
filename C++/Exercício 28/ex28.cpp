#include <stdio.h>
main()
{
    float valorProduto, valorPago, troco;
    printf("\nDigite o valor do produto: ");
    scanf("%f", &valorProduto);
    printf("\nDigite o valor pago: ");
    scanf("%f", &valorPago);
    troco = valorPago - valorProduto;
    printf("\nO troco a ser recebido é: %.2f", troco);
}