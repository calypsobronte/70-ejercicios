let n = [];
let i = 0;
let numeroDeVeces = parseInt(prompt(`¿Cuántos números va a ingresar?`));
for ( i = 0; i < numeroDeVeces; i++){
    let ingresoDatos = parseInt(prompt("ingrese un número"))
    n.push(ingresoDatos);
}
console.log(n);
let primo = true;
j = 0;
for (let j = 1; j<numeroDeVeces; j++){
    if (n[i] % j == 0 ){
        primo = false;
    }else if (n[i] % j != 0 ){
        primo = false
    }

}
if (primo == true){
    console.log("El número " + n[i] + " es primo" + "<br>")

}