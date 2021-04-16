let visitantes = new Array(5)
let nombre
for(let i=0; i<5; i++){
    nombre = prompt("Ingrese el nombre del visitante por favor ");
    if (i==0){
        visitantes[i] = nombre;
        alert("el visitante fue registrado en el listado")
    } 
    else{ 
     for (let j=0; j<i; j++){
       if (visitantes[j==nombre]){
           alert("El visitante ya esta en el recinto feliz dia ")
           i--;
           break;}
        }
    }  visitantes[i] = nombre;
    
}



