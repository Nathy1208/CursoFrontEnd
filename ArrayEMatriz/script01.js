//Matrizes 
//Exemplo de matriz 2D - bidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][1]); //5

//criar uma matriz de identidade
let MIidentidade = [[],[],[]];
//           i  j
MIidentidade[0][0] = 1;
MIidentidade[0][1] = 0;
MIidentidade[0][2] = 0;
MIidentidade[1][0] = 0;
MIidentidade[1][1] = 1;
MIidentidade[1][2] = 0;
MIidentidade[2][0] = 0;
MIidentidade[2][1] = 0;
MIidentidade[2][2] = 1;

console.log(MIidentidade);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

 
 
