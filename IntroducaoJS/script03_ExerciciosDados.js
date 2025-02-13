var prompt = require("prompt-sync")();
// Exercicio 1 - Par ou Ímpar 
var numero = Number(prompt("Informe um N°:"));

if ((numero%2)===0) {
    console.log("O número digitado é par");
} else{
    console.log("O número digitado é ímpar");
}

//Exercicio 2 - Laço for

for (let i = 1; i < 100; i++) {
    console.log(i);    
}