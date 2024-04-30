var prompt = require("prompt-sync")();

console.log("Digite números decimais. Digite 0 para encerrar.");

let soma = 0;
let contador = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal: "));

    if (numero === 0) {
        break;
    }

    soma += numero;
    contador++;
}

let media = soma / contador;

if (contador === 0) {
    console.log("Nenhum número foi inserido.");
} else {
    console.log("A média aritmética dos números inseridos é:", media.toFixed(2));
}
