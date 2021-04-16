/* Escriba una función que calcule el doble del triple de cada elemento en un vector numérico*/
const vector = [1,2,3,4,5];
const newVector = vector.map(n => (n*3)*2)
console.log(newVector)

/* escriba una función que le permita aplicar cualquier función sobre los elementos de una matriz y retorne la matriz con la transformación aplicada */
const originalMatrix = [[1,2,3],[4,5,6],[7,8,9]];
const cubicMapper = (n) => Math.pow(n,3);
const mapperApplier = (matrix,mapper) => matrix.map(row => row.map(mapper));
const newMatrix =  mapperApplier(originalMatrix,cubicMapper);
console.log(newMatrix.join('\n'))

/*Combine los dos conceptos anteriores y aplique la función inicial sobre cualquier matriz de entrada NxM.*/
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const newMatrix = matrix.map(row => row.map(n => (n*3)*2))
console.log(newMatrix1)


// ======= Results ===============
/*
[ 6, 12, 18, 24, 30 ]
[ [ 6, 12, 18 ], [ 24, 30, 36 ], [ 42, 48, 54 ] ]
1,8,27
64,125,216
343,512,729

*/