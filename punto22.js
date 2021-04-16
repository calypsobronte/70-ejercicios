let ejecusion = prompt("con cual siclo quieres que se ejecute la suma -1. ciclo for -2. ciclo while -3. ciclo doWhile")
if (ejecusion == "1") {
    cicloFor()
} else if (ejecusion == "2") {
    cicloWhile()
} else if (ejecusion == "3") {
    CicloDoWhile()
}
function cicloFor() {
    let suma = 0
    for (let i = 1; i <= 100; i++) {
        suma = suma + i;
    }
    alert("El total de la suma es " + suma)
}

function cicloWhile() {
    let suma = 0
    let x = 0;
    while (suma <= 100) {
        suma++;
        x += suma;
    }
    alert("El total de la suma es " + x);
}
function CicloDoWhile() {
    do {
        i += 1;
        console.log("El total de la suma es " + i);
    } while (i <= 5151)
}






