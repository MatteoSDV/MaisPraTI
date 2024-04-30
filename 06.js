// verif triângulos
var prompt = require("prompt-sync")();
a = parseInt(prompt("insira o lado A"));
b = parseInt(prompt("insira o lado B"));
c = parseInt(prompt("insira o lado C"));
if (a + b > c && a + c > b && b + c > a){
  console.log("seu triângulo é válido!")
        if(a == b && b==c){
            console.log("é um triângulo equilátero.")
        }     
            else if (a!=b && b!=c ){
            console.log("é um triângulo escaleno.")
            }  
                else if(a==b || a==c || b==c){
            console.log("é um triângulo isóceles.")
        } else;
} else{ console.log("estes valores não formam um triângulo.")}
