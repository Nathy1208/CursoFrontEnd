//Função de String (Texto)
var texto =  "Aula de JavaScript";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

console.log (texto.substring(0,4));
console.log(texto.slice(-10));
console.log(texto.replace("JavaScript", "TypeScript"));

//split = usar um caracter em comum para separar rm  um vetor
let linguagens = "JavaScript,C++,Python,PHP";
let Arraylinguagens = linguagens.split(",");
console.log (linguagens);

let tesoura = " JavaScript ";
console.log(tesoura.trim());

