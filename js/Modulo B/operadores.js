var idade, estado, salario, sexo;

5 > 2 //TRUE

7 < 4 // FALSE

8 <= 8 // TRUE

9 <= 7 // FALSE

5 == 5 //TRUE

4 != 4 //FALSE

idade >= 15 && idade <= 17; // a idade deve ser maior ou igual a 15 E menor ou igual a 17

estado == `RJ` || estado == `SP`; // o estado é RJ ou SP

salario > 1500 && sexo != `M`; // o salario é maior que 1500 E o sexo é diferente de M

media > 6 ? "Aprovado" : "Reprovado" // se a nota for maior ou igual a 6 resulta aprovado, caso contrario reprovado

5 == '5';  // TRUE  converte string para número
5 === '5'; // FALSE tipos diferentes

true == 1;  // TRUE  1 é tratado como verdadeiro
true === 1; // FALSE booleano ≠ número

/*ORDEM DE PRECEDÊNCIA

    OPERADORES ARÍTIMETICOS
        1- ()
        2- **
        3- * , / , %
        4- + , -
    
    OPERADOES RELACIONAIS
        1- < , > , <= , >= , == , === 
    
    OPERADORES LOGICOS
        1- !
        2- &&
        3- ||
    
    OPERADORES TERNARIOS
       EX: TESTE ? TRUE : FALSE
*/