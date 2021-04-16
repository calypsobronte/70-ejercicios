var list = [];
let num = parseInt(prompt("Ingrese el num hasta el cual quiere que se ejecute el factorial"));
let aux = 0
const factorial = (n) =>{
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
for (let i = 0; i < num; i++) {
    aux++
    list.push(aux)
}
for (let i = 0; i < list.length; i++) {
    console.log(list[i] + " : " + factorial(list[i]) + "<br>");
}
