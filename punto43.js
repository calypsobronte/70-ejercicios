let listEva = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del conjunto?'));
for (let i = 1; i <= n; i++) {
    let numero = parseInt(prompt('Ingrese un número'))
    listEva.push(numero)
}
alert("AVISO INPORTANTE" + "                                                                     -----" + "porfa antes de ingresar los datos de la sigiente pregunta usa las palabras claves de ejecucion que salen en los () y todo en minuscula")
let ejecucion = prompt("que quieres hacer con el vector (-sumar, -restar, -multiplicar, -promedio)")
if (ejecucion == "sumar") {
    alert("la suma del vactor es: " + sumarV(listEva))
} else if (ejecucion == "restar") {
    alert("la resta del vactor es: " + restarV(listEva))
} else if (ejecucion == "multiplicar") {
    alert("la multiplicacion del vactor es: " + multiplicarV(listEva))
} else if (ejecucion == "promedio") {
    alert("el promedio del vactor es: " + promedioV(listEva))
}

function sumarV(numeros) {
    let total = numeros.reduce((a, b) => a + b, 0)
    return total
}
function restarV(numeros) {
    let total = numeros.reduce((a, b) => a - b, 0)
    return total
}
function multiplicarV(numeros) {
    let total = numeros.reduce((a,b)=>a*b);
    return total 
}
function promedioV(numeros) {
    let total=sumarV(numeros) / numeros.length
    return total
}