function potencia(number, base){
    return Math.pow(number, base).toFixed(1);
}

function raiz(number, base){
    return Math.pow(number, base).toFixed(1);
}

function validar(opc, n, b) {
    switch (opc) {
        case 1:
            potencia(n,b);
            break;
        case 2:
            raiz(n,b);
            break;
        default:
            console.log("Ingrese la opción 1 o 2");
            break;
    }
}


let opcion= parseInt(prompt("Selecione 1. Potencia ó 2. Raiz"));
let numero= parseFloat(prompt("Ingrese por favor un número"));
let base= parseFloat(prompt("Ingrese por favor la base"));
let r= potencia(numero, base);
console.log(r);