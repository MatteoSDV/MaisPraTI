var prompt = require("prompt-sync")(); 

console.log("Digite 5 valores para a variável N:");

for (let i = 0; i < 5; i++) {
    let N = parseInt(prompt(`Digite o valor ${i + 1}: `));

    console.log(`Tabuada de ${N}:`);
    for (let j = 1; j <= N; j++) {
        console.log(`${j} x ${N} = ${j * N}`);
    }
    console.log(); 
}