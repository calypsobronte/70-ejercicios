let listEva1 = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro de cada conjunto de numeros?'));
for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt('Ingrese un número'))
    listEva1.push(numero)
}
alert("vas a ingresar el siguiente conjunto atento")
let listEva2 = [];
for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt('Ingrese un número'))
    listEva2.push(numero)
}
console.log(sumaV(listEva1, listEva2) + "total de la suma de los conjuntos")
function sumaV(list1, list2) {
    total = []
    for (i = 0; i < n; i++) {
        total.push(list1[i] + list2[i])
    }
    return total
}



