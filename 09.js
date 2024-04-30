var prompt = require("prompt-sync")();
let cod = parseInt(prompt('insira o código do produto: '));

if (cod === 1) {
    console.log("Sul");
} else if (cod === 2) {
    console.log("Norte");
} else if (cod === 3) {
    console.log("Leste");
} else if (cod === 4) {
    console.log("Oeste");
} else if (cod >= 5 && cod <= 6) {
    console.log("nordeste");
} else if (cod >= 25 && cod <= 50) {
    console.log("nordeste");
} else if (cod > 6 && cod < 9) {
    console.log("Sudeste");
} else if (cod >= 10 && cod <= 20) {
    console.log("Centro-Oeste");
}
