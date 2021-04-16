j= parseInt(prompt("Ingrese el tamaño del vector"))
let vector = new Array(j)
for(i = 0; i <= j; i++){
    vector[i] = Math.round(Math.random()*100)
    if (vector[i]%2==0 && i%2!=0){
        alert(vector[i] + " esta en la posición " + i)
    }
}



