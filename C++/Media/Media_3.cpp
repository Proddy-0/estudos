#include <stdio.h>
main(){
	int a,b,c,d;
	printf("Digite o primeiro valor: ");
	scanf("%d", & a);
	printf(" Digite o segundo valor: ");
	scanf("%d", & b);
	printf("Digite o terceiro valor: ");
	scanf("%d", & c);
	d = (a+b+c)/3;
	printf("a media tem o valor de %d", d);
}
