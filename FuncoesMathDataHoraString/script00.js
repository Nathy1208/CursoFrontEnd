// Funções Matemáticas

//Sqrt //pow
//raiz quadrada de 25
console.log(Math.sqrt(25)); //5

//potência
console.log(Math.pow(3,2)); //3² = 9
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); // 27^(1/3) = 3

//Arredondamento
//math.round = ele arredonda para o número próximo
console.log(Math.round(4.4)); 
console.log(Math.round(4.7));

//Math.floor = arredonda para o n° mais baixo
console.log(Math.floor(4.9));

console.log(Math.ceil(4.1));

console.log(Math.random()); 

console.log(Math.ceil(Math.random()*100));

console.log(Math.floor(Math.random()*1000));

console.log(Math.floor(Math.random()*10000));

console.log(Math.random(Math.random()*50));

console.log(Math.random(Math.random()*50+50));

//Máximo. Mínimo, Absoluto
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //array
var absoluto = 10;
console.log(Math.max(numeros)); //9
console.log(Math.min(numeros)); //0
console.log(Math.abs(absoluto)); //10 //modulo


