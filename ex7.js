// maçãs e preços -  30 cent -dúzia, 25  cent dúzia+
var prompt = require("prompt-sync")();
var maça = parseInt(prompt("Informe o número de maçãs: "));
    if(maça < 12){
        menosduzia = (maça * 0.30)
        menosduzia = +menosduzia.toFixed(2)
        console.log(`Serão compradas ${maça} maçãs, 30 centavos a unidade, pelo preço de: ${menosduzia} reais`);
    } else if(maça >= 12){
        maisduzia = (maça * 0.25)
        maisduzia = +maisduzia.toFixed(2)
        console.log(`Serão compradas ${maça} maçãs, 25 centavos a unidade,  pelo preço de ${maisduzia} reais.`);
    }3