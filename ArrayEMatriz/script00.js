// Array de Matrizes

//declaração de uma Array

let dados = []; //uso dos conchetes permite a declaração de uma Array
let numeros = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); //quantidade de elementos dentro de uma array

//indices do Array

// Imprimir o 5 elemento de uma array.
console.log(numeros[4]); //5

//adicionar elementos em uma array
palavras.push("Cachorro");
console.log(palavras)

palavras.unshift("Prédio");
console.log(palavras);

//Remover elementos 
palavras.pop();//remove o último elemento
console.log(palavras);
palavras.shift();//remove o primeiro elemento
console.log(palavras);

//forEach - repetição de um vetor
palavras.forEach (palavra => {
    console.log(palavra)
});

//Splice
palavras.splice(1,1);
console.log(palavras);

//manipulação de array
let numeroDobro = numeros.map(x =>x*10);
console.log(numeroDobro); // [20, 40, 60]
