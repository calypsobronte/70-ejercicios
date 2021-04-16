let listEva = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del arreglo para evaluar la media del conjunto?'));
for ( let i = 1; i <= n; i++){
    let numeros = parseInt(prompt('Ingrese un número'))
    listEva.push(numeros)
}
listEva.sort((a, b) => a - b);
let mediaBaja = Math.floor((listEva.length - 1) / 2);
let mediaAlta = Math.ceil((listEva.length - 1) / 2);
let media = (listEva[mediaBaja] + listEva[mediaAlta]) / 2;
console.log(media)




