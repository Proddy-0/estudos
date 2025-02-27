#include <stdio.h>
main()
{
    int i = 0;
    printf("Enter a number: ");
    scanf("%d", &i);
    switch (i)
    {
    case 1:
        printf("Case 1\n");
        break;
    case 2:
        printf("Case 2\n");
        break;
    case 3:
        printf("Case 3\n");
        break;
    case 4:
        printf("Case 4\n");
    case 5:
        printf("Case 5\n");
    case 6:
        printf("Case 6\n");
    case 7:
        printf("Case 7\n");
    default:
        printf("Default\n");
    }
}