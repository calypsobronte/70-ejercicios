function division() {
    let count=0;
    do{
    let numeroUno=parseFloat(prompt("Ingresa primer valor"));
    let numeroDos=parseFloat(prompt("Ingresa segundo valor"));

        if (!numeroDos == 0) {
            count++;
            return numeroUno/numeroDos;
        }
        console.log("Vuelve a ingresarlo");
    }while(count==0);
    
}

console.log(division());