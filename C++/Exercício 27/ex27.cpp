#include <stdio.h>
main()
{
    int v1 = 10;
    int v2 = 20;
    float v3 = 15.1;
    printf("\nA soma dos dois valores inteiros: %d", v1 + v2);
    printf("\nO dobro do primeiro valor inteiro somado com o dobro do segundo valor inteiro: %d",  (v1*2) + (v2*2));
    printf("\nO valor float multiplicado por 6.5: %.1f",6.5*v3);
    printf("\nA soma dos tres valores: %.1f",v1+v2+v3);
}