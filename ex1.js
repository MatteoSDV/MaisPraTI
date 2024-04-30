// 1 - celcius para Farenheidt
prompt = require('prompt-sync')()

console.log("Conversor de Celcius para Farenheidt");
 Celsius = prompt("Insira a temperatura em Celsius: ");

 Fahrenheit = (Celsius * 9) / 5 + 32;
console.log(
  `${Celsius} graus Celsius equivalem a ${Fahrenheit} graus Farenheidt.`,
);  
