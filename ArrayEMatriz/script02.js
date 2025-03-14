//operações avançadas em vetores (arrays)

let numeros = [10, 20, 30, 40, 50];
let numMaior20 = numeros.filter(x => x > 20);
console.log(numMaior20); // [25, 30, 45]

//map
let numerosNovos = numeros.map(x => x*3);
console.log(numerosNovos)

//reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);

//sort(organizador)
let aleatorio = [2, 5, 1, 6, 8, 9, 3, 0, 4, 7];
aleatorio.sort();
console.log(aleatorio);