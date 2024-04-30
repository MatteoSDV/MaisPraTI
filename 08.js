// ler 2 valores, ordenar em crescente
var prompt = require("prompt-sync")();
num1 = parseFloat(prompt("insira o primeiro valor: "));
num2 = parseFloat(prompt("insira o segundo valor: "));
    if(num1 > num2){
        console.log(`em ordem crescente, os valores são: ${num2}, ${num1}`);
    }   else if(num2 > num1){
        console.log(`em ordem crescente, os valores são: ${num1}, ${num2}`);
    }   else if(num1 == num2){
        console.log("estes valores são iguais.");
    }
