var array1 = [];
var array2 = [];
let numDatos1 = parseInt(prompt("dame los numero de datos que quieres ingresar a la primera lista de numeros "))
for (i = 0; i < numDatos1; i++) {
    array1.push(parseInt(prompt("dame el numero")))
}
let numDatos2 = parseInt(prompt("dame los numero de datos que quieres ingresar a la segunda lista de numeros "))
for (j = 0; j < numDatos2; j++) {
    array2.push(parseInt(prompt("dame el numero")))
}
var iguales = [];
if (array1.length == array2.length) {
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            if (array1[i] == array2[j])
                iguales.push(array1[i]);
        }
    }
} else if (numDatos1 < numDatos2) {
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            if (array1[i] == array2[j])
                iguales.push(array1[i]);
        }
    }
} else if (numDatos1 > numDatos2) {
    for (var i = 0; i < array2.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j])
                iguales.push(array2[i]);
        }
    }

}

console.log("array1= " + array1)
console.log("<br/>" + "array2= " + array2)
console.log("<br/>" + iguales);
console.log(iguales)






