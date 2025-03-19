#include <stdio.h>
main()
{
    int v1 = 10;
    int v2 = 3;
    float v3 = 15.7;
    printf("\nResultado 1: %d", v1 / v2);
    printf("\nResultado 2: %.1f",  v3+v1/v2);
    printf("\nResultado 3: %d",v1%v2);
    printf("\nResultado 4: %.1f",v1*v2-v3);
}