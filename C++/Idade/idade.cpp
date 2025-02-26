#include <stdio.h>
main(){
	int n;
	printf("Digite o seu ano de nascimento: ");
	scanf("%d", & n);
	printf("Sua idade e: %d", 2025-n);
	printf("\nVoce ja viveu %d em dias", (2025-n)*365);
	printf("\nEm 2050 voce tera: %d", (2025-n)+ 25);
}
