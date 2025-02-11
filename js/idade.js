const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificar(valor) {
    if (valor >= 18) {
        return (`Sua idade de ${valor} te faz ter a maior idade `);
    }
    else {
        return (`Sua idade de ${valor}  te faz ter a menor idade`);
    }
}

function inicio() {
    rl.question('Digite Sua idade? : ', (input) => {
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