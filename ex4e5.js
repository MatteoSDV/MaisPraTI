//média 6+ 
    const prompt = require('prompt-sync')()
num1 = parseFloat(prompt("insira a primeira nota: "));
num2 = parseFloat(prompt("Insira a segunda nota: "));
if( num1 + num2 >= 12) { 
    console.log ("parabéns, você foi aprovado!")
} else{
    console.log("Você foi REPROVADO! Estude mais")
}
