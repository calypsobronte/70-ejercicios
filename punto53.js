let inicio = parseInt(prompt("Ingrese el valor inicial"));
let final = parseInt(prompt("Ingrese el valor final"));
if (inicio < final) {
    for (let i = inicio; i <= final; i++) {
        if (i % 2 === 0) {
            console.log("El numero " + i + " es par<br>");
        } else {
            console.log("El numero " + i + " es impar<br>");
        }
    }
} else if (inicio === final) {
    if (inicio % 2 === 0) {
        console.log("El numero " + inicio + " es par<br>");
    } else {
        console.log("El numero " + inicio + " es impar<br>");
    }
} else {
    for (let i = inicio; i >= final; i--) {
        if (i % 2 === 0) {
            console.log("El numero " + i + " es par<br>");
        } else {
            console.log("El numero " + i + " es impar<br>");
        }
    }
}



