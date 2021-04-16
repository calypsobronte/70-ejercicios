let arrayNumeros = []
let limit=parseInt(prompt("cuantos numeros quieres ingresar"))
for (i = 0; i < limit; i++) {
    arrayNumeros.push(parseInt(prompt("dame un numero")));
}
console.log(arrayNumeros.sort(function (b, a){
    return b - a;
}))
const alreves = arrayNumeros.reverse();
console.log(alreves);




