var prompt = require("prompt-sync")();
// Desafio 1 - Verificação de Idade
var idade = Number(prompt("Informe sua Idade:"));
//if encadeado 
if (idade < 18) {
    console.log("menor de idade");
} else if (idade>=18 && idade<60){
    console.log("você é adulto");
} else{
    console.log("Você é idoso");
}

// Desafio 2 - Tabuado do 5
let numero = 5;
for (let i = 0; i <= 10; i++) {
    console.log(numero * i)
  }

  // Desafio 3 - Verificação de Números Pares 1 a 20
 for(let i=1;i<=20;i++) {
    if ((i%2)==0) {
        console.log(i+"é par");   
    }
 }

