var arrayNumeros = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del arreglo?'));
for ( let i = 1; i <= n; i++){
    let numeros = parseInt(prompt('Ingrese un número'))
    arrayNumeros.push(numeros)
}
const arrayPares = arrayNumeros.filter(numeros => {
    return numeros %2==0
})
console.log(arrayPares.sort((a, b) => a - b))
const arrayNoPares = arrayNumeros.filter(numeros => {
    return numeros %2!=0
})
console.log(arrayNoPares.sort(function (b, a){
    return b - a;
}))
const alreves = arrayNoPares.reverse();
console.log("<br/>"+alreves);




