var num = parseInt(prompt("Ingrese un número para ser evaluado."));
if (num % 2 == 0 && num > 0) {
    alert("El número ingresado es par y es positivo.")
}
else if (num % 2 == 0 && num < 0) {
    alert("El número ingresado es par y es negativo.")
} else {
    let num2 = parseInt(prompt("porfa dame otro numero"))
    let m = num * num2
    alert ("la multipliacion es "+ m)
}






