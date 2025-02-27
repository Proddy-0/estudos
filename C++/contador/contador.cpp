#include <stdio.h>
main(){
    int a = 0;
    printf("Ate que numero deve ser contado? \n");
    scanf("%d", &a);
    for(int i = 0; i <= a; i++){
        printf("%d\n", i);
    }
}
