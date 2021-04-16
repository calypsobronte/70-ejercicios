let vectorTemperatura = [];
let promedio = 0;
let resultado = 0;

let cant = parseInt(prompt("Cuantos días, deseas ingresar"));
for (let i = 0; i < cant; i++) {
    let ingresar = parseFloat(prompt("Ingrese temperatura del día " + (i + 1) + " en grados °C"));
    vectorTemperatura.push(ingresar);
}

vectorTemperatura.forEach(
     (a) => {
        promedio += a;
    }
)
resultado = (promedio.toFixed(2)) / 3;

if (resultado >= 25.6) {
    console.log("Temperatura promedio es de " + resultado + "C°");
    console.log("Esta haciendo calor");
} else {
    console.log("Temperatura promedio es de " + resultado + "C°");
    console.log("Esta haciendo frio");

}