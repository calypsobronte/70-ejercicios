var stop = prompt("Ingrese los numeros para realizar la operacion ");
var array = []

for (i = 0; i < stop; i++) {
  array.push(parseInt(prompt("Ingresa otro numero para el arreglo")));
}
const pirmos = array.filter(num => {
  return num % num == 1
})
const noPrimos = array.filter(num => {
  return num % num == 0
})
console.log("tienes " + pirmos.length + " num primos")
console.log("<br>" + "tienes " + noPrimos.length + " num no primos")
console.log(pirmos)
console.log(noPrimos)
