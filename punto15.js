var kilos = parseFloat(prompt("Ingrese el número de kilos de manzanas que el cliente quiere comprar ."));
const precio = 10000;
let total = kilos * precio;
if (kilos >= 0.01 && kilos <2) {
    alert("El cliente debera cancelar: " + total + "sin descuento.")
} 
else if (kilos >= 2 && kilos <5) {
    alert("El cliente debera cancelar: " + (total - (total * 0.10)) + " con descuento")
}
else if (kilos >= 5 && kilos <10) {
    alert("El cliente debera cancelar: " + (total - (total * 0.15)) + " con descuento")
}
else if (kilos >= 10) {
    alert("El cliente debera cancelar: " + (total - (total * 0.2)) + " con descuento")
}
else {
    alert("Cantidad no válida")
}






