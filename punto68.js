let array = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];
for(let i= 0;i<array.length;i++){
    if(i % 2 ==0){
        impares.push(array[i]);
    }
    else{
        pares.push(array[i]);
    }
}

console.log("Los numeros pares son " + pares);
console.log("Los numeros impares son " + impares);