let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];
let ar = [a, b, c];
for (let i=0; i<ar.length; i++){
    for(let j=0; j<ar.length; j++){
        if(i==j && i==Math.floor(ar.length/2)){     
        alert("El valor de la mitad es " + ar[i][j])
        }
    }
}



