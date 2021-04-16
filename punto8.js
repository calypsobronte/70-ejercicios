let arrayNumeros = []
for (i = 0; i < 10; i++) {
    arrayNumeros.push(Math.round(Math.random() * 25));
}
console.log(getMaxOfArray(arrayNumeros))
const getMaxOfArray = (numArray) =>{
    return Math.max.apply(null, numArray);
}






