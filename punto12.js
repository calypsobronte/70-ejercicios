var matriz=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const primeros1 = matriz.filter(numeros => {
    return numeros <=4
})
const primeros2 = matriz.filter(numeros => {
    return numeros > 4 && numeros <=8
})
const primeros3 = matriz.filter(numeros => {
    return numeros > 8 && numeros <=12
})
const primeros4 = matriz.filter(numeros => {
    return numeros > 12 && numeros <=16
})
console.log(primeros1)
console.log("<br>"+primeros2)
console.log("<br>"+primeros3)
console.log("<br>"+primeros4)
