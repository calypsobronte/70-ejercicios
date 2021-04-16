let listEva = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del conjunto?'));
for ( let i = 1; i <= n; i++){
    let numero = parseInt(prompt('Ingrese un número'))
    listEva.push(numero)
}
let di =parseInt(prompt("porque numero quieres evaluar el conjunto para saber si son divisibles por el numero que ingreses"))
const numDivisibles = listEva.filter(numeros => {
    return numeros % di==0
})
console.log("los numeros divisibles por "+di+" son: "+numDivisibles)