function nprimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Os 50 primeiros números primos maiores que 100 são:");

let contador = 0;
let numero = 101; 

while (contador < 50) {
    if (nprimo(numero)) {
        console.log(numero);
        contador++;
    }
    numero++;
}
