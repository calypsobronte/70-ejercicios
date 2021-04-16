let array = [];
let numeroVeses = parseInt(prompt("¿cuantas veces quieres que se repita?"));
for (let i=0; i<=numeroVeses; i++) {
    array.push(parseInt(prompt("Ingrese un número")));  
}
function factorizar(n) {
    if (n == 0) return 1;
    return n * factorizar(n - 1);
}
for (i=0; i<array.length; i++){
    console.log(array[i] + " : " + factorizar(array[i]) + "<br>")
}






