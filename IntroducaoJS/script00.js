//tipos de dados
const texto = "Olá, Mundo!!";
var boasvindas = "Bem-Vindos, Alunos de JS";
boasvindas = "Boas Vindas Alunos";
// texto = "skjskqnwjdb" >> bão pode mudar uma cons (constante), diferente de var (variavel)

console.log(texto);
console.log(boasvindas);

//Tipos de Dados
//texto sempre entre aspas duplas ("x") ou aspas simples('x')
let string = "Variavel de texto"; 
let numero1 = 42; //número inteiro
let numero2 = 10.65; //número decimal
let numero3 = "2"; //apesar de ser um número ele é um texto que tem valor 2
let boolean = true;
let boolean2 = false;
let boolean3 = "true" //texto
let underfined;
let nula = null;

//let, var, const
let resultado = true; //atribuições
resultado = false; //reatribuída
//let resultado = true; //proibido reescrever 

var nota = 10; //atribuíção
nota = 8; // reatribuição
var nota = 9; // posso reescrever a atribuição

const fixo = 42; // atribuição
// fixo = 43;>> erro - não pode reescrever o valor de uma const, pois já é fixo