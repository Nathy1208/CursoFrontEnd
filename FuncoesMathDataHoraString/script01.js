// funções data e hora 

let agora = new Date();
console.log(agora.toLocaleTimeString());
//definição da classe Date()
//para variavel agora.

//Calculo com Datas
let date1 = new Date("2025-01-23");
let date2 = new Date("2025-06-18");
let diferenca = date2-date1;

console.log (diferenca/(1000*60*60*24));

