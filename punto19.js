let peso = parseFloat(prompt("Ingrese su peso."));
let altura = parseFloat(prompt("Ingrese su altura."));
let imc = peso / (altura * 2);
if (imc < 18) {
    alert("bajo peso.")
}
else if (imc >= 18 && imc <= 25) {
    alert("peso normal.")
}
else {
    alert("sobre peso.")
}





