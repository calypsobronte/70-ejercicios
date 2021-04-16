let a = [4, 5, 6];
let b = [7, 8, 9];
let c = [1, 2, 3];
let matriz = [a, b, c]
let vectorUno = []
let vectorDos = []

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === j) {
            vectorUno.push(matriz[i][j])
        }
        if ((i + j) === matriz.length - 1) {
            vectorDos.push(matriz[i][j])
        }
    }
}
console.log(matriz);
console.log("Vector 1")
console.log(vectorUno);
console.log("Vector 2")