//estrutura de dados

//Condicionais (if/ Else/ Switch case)
var precoProduto = 150;

if(precoProduto>=100) {
    console.log("Valor a pagar" +(precoProduto*0.9));
} else {
    console.log("Valor a pagar:"+(precoProduto));
}

var mes = 1
switch (mes) {
    case 1:console.log("Janeiro");
        break;
    
    case 2:console.log("Fevereiro");
        break;

    case 3:console.log("Março");
        break;

    default:
        console.log("Outro Mês")
        break;
}

//Estruura de repeticão (for , while)
for (let i = 0; i < 10; i++) {
    console.log ("Índice:"+i)
}

//whilr(condição de parada; incrementos)
var continuar = true;
var numeroEscolhido = 3;
var tentativas = 0;
while (continuar) {
    let numeroSortiado = Math.round(Math.random()*10);
    if (numeroEscolhido==numeroSortiado) {
        continuar = false;
        
    }
    tentativas ++;
    console.log("Nº de tentativas:"+tentativas);
}

//funções (métodos)
function saudacao(nome) {
    return "Olá," + nome + "!!!";
}

console.log (saudacao("Nathy"));