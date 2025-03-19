#include <stdio.h>
main()
{
int dado_1, dado_2;
float valor_acao = 53.60, valor_a_pagar;

printf("\nDigite o valor do dado 1: ");
scanf("%d", &dado_1);
printf("\nDigite o valor do dado 2: ");
scanf("%d", &dado_2);

valor_a_pagar = (dado_1 + dado_2) * valor_acao;

printf("\nValor a pagar: R$%.2f", valor_a_pagar);
}
