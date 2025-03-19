#include <stdio.h>
main()
{
float tempCelsius = 0;
printf("\nDigite a temperatura em Celsius: ");
scanf("%f", &tempCelsius);
float tempFahrenheit = (tempCelsius * 212)/100;
float tempKelvin = (tempCelsius * 373.15)/100;


printf("\nTemperatura em Celsius: %.2f", tempCelsius);
printf("\nTemperatura em Farenheit: %.2f", tempFahrenheit);
printf("\nTemperatura em Kelvin: %.2f", tempKelvin);
}