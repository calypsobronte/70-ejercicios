let numero = parseInt(prompt("Ingrese un número mayor que uno."));
let i =0;
var nPrimo = true
for ( i = 2; i<numero; i++){
    if (numero % i == 0 ){
        nPrimo = false;
    }
}
if (nPrimo == true){
    console.log("El número " + numero + " es primo")
} else {
    console.log("El número " + numero + " no es primo")
}






