let num = parseInt(prompt('Ingrese un número para ser factorisado'));
console.log(factorial(num))
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
