var prompt = require("prompt-sync")(); 

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

console.log("Digite os valores inteiros (digite um valor nulo ou negativo para sair): ");

while (true) {
    
    let valor = parseInt(prompt("Digite um valor inteiro: "));

    if (valor <= 0 || isNaN(valor)) {
        console.log("Programa encerrado.");
        break;
    }

    console.log(`${valor} é ${verificarParOuImpar(valor)}.`);
}