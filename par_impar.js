const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificar(valor) {
    if (valor % 2 == 0) {
        return (`O numero ${valor} é par`);
    }
    else {
        return (`O numero ${valor} é impar`);
    }
}

function inicio() {
    rl.question('Digite um valor para verificar se ele é par ou impar: ', (input) => {
        const valor = Number(input);
        if (isNaN(valor)) {
            console.log(`Por Favor, digite um número valido.`);
        }
        else {
            console.log(verificar(valor));

        }
        rl.close();
    });
}
inicio();