var prompt = require("prompt-sync")();

//Calculadora simples

//funções
//soma
function soma (a,b){
    return (a+b);
}

//Subtração
function subtracao (a,b){
    return (a-b);
}

//Multiplicazão
function multiplicacao (a,b){
    return (a*b);
}

//divisão
function divisao (a,b){
    return (a/b);
}

function menu(){
    console.log("Escolha a opção desejada");
    console.log("1.soma")
    console.log("2.Subtração")
    console.log("3.Multiplicação");
    console.log("4.Divisão");

    let operacao =Number (prompt());
    switch (operacao) {
        case 1:
            var a = Number (prompt("Informe seu primeiro N° "));
            var b = Number (prompt("Informe o segundo N°"));
            console.log("O resultado da soma é:" + soma(a,b));
            soma(a,b);
            break;

        case 2:
            var a = Number (prompt("Informe seu primeiro N° "));
            var b = Number (prompt("Informe o segundo N°"));
            console.log("O resultado da subtração é:" + subtracao(a,b));
            subtracao(a,b);
            break;

        case 3:
            var a = Number (prompt("Informe seu primeiro N° "));
            var b = Number (prompt("Informe o segundo N°"));;
            console.log("O resultado da multiplicação é:" + multiplicacao(a,b));
            multiplicacao(a,b);
            break;

        case 4:
            var a = Number (prompt("Informe seu primeiro N° "));
            var b = Number (prompt("Informe o segundo N°"));
            console.log("O resultado da divisão é:"+divisao(a,b));
            if (b===0) {
                    console.log("Não dividirás por Zero!")
                }else {divisao(a,b)}
            divisao(a,b);
            break;
            default:
                console.log("Operação invalida")
            break;
    }
}

menu();