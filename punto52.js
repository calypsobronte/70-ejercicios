let inicial = parseInt(prompt("Ingrese el valor inicial"));
let fin = parseInt(prompt("Ingrese el valor final"));
if (inicial < fin) {
    for (let i = inicial; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} else if (inicial === fin) {
    if (inicial % 2 === 0) {
        console.log(inicial);
    } else {
        alert("Usted ingreso dos numeros iguales e impares");
    }
} else {
    for (let i = inicial; i >= fin; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}



