// 2 - eleitores
const prompt = require('prompt-sync')();


let eleitores = prompt("Insira o número total de eleitores: ");
let brancos = prompt("Insira o número de votos brancos: ");
let nulos = prompt("Insira o total de votos nulos: ");
let validos = prompt("Insira o total de votos válidos: ");

// cálculo porcentagens
let percbrancos = brancos / eleitores *100;
let percnulos = nulos / eleitores *100;
let percvalidos = validos / eleitores *100;


console.log("Percentuais, em ordem: Brancos, nulos, e válidos", percbrancos, percnulos, percvalidos);
  