let num = parseInt(prompt("Ingresa un numero para sacar sus divisores"))
for (i = 0; i <= num; i++) {
    if (num % i == 0) {
        console.log(i + "<br/>")
    }
}
