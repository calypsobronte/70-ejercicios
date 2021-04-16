let array = []
for (i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 25));
}
console.log(array.sort((a, b) =>{
    return a - b;
}))
console.log(array.sort((a, b) => a - b ))






