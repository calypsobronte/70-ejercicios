let arrayNumeros = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del arreglo?'));
for ( let i = 1; i <= n; i++){
    let numeros = parseInt(prompt('Ingrese un número'))
    arrayNumeros.push(numeros)
}
console.log(arrayNumeros);
console.log(arrayNumeros.sort((a, b) => a - b));




