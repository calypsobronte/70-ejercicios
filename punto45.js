let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primos = [];
let noprimos = [];
let calculoFactorial;
let resultadoFactorial = 1;
let j = 1;
const primo = (numero) => {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}

for (j; j < array.length; j++) {

    if (primo(array[j])) {
        primos.push(array[j]);
        calculoFactorial = array[j] * array[j + 1];
        resultadoFactorial = resultadoFactorial * calculoFactorial;
    } else {
        noprimos.push(array[j]);
    }

}



console.log("Los numeros primos son " + primos);
console.log("Los numeros NO primos son " + noprimos);
console.log("El factorial de los numero primos es " + resultadoFactorial + '\n')