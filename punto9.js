let numEntero1 = parseInt(prompt("Ingrese un número entero"));
let numEntero2 = parseInt(prompt("Ingrese un número entero"));
let numEntero3 = parseInt(prompt("Ingrese un número entero"));
if (numEntero1 === numEntero2 && numEntero1 === numEntero3) {
    alert("Iguales")
} else {
    if (numEntero1 > numEntero2 && numEntero1 > numEntero3) {
        alert(numEntero1)
    } else if (numEntero2 > numEntero1 && numEntero2 > numEntero3) {
        alert(numEntero2)
    } else {
        alert(numEntero3)
    }
}
if (numEntero1 % 2 == 0 ) {
    console.log (`${numEntero1} es par` + "<br>")
} else if (numEntero2 % 2 == 0){
    console.log (`${numEntero2} es par` + "<br>" )
} else if ( numEntero3 % 2 == 0){
    console.log (`${numEntero3} es par` + "<br>" )
}






