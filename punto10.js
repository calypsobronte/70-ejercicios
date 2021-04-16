let figuraGeometrica = prompt("cual de las tres figuras(cuadrado, triangulo, circulo) deseas averiguar su perimetro y area");
if (figuraGeometrica === "cuadrado") {
    let medidaCaraCuadrado = parseFloat(prompt("dame la medida de una de las caras del cuadrado"))
    cuadrado(medidaCaraCuadrado)
} else if (figuraGeometrica === "triangulo") {
    let medidaCaraTriangulo1 = parseFloat(prompt("dame la primera medida de las caras del triangulo"))
    let medidaCaraTriangulo2 = parseFloat(prompt("dame la segunda medida de las caras del triangulo"))
    let medidaCaraTriangulo3 = parseFloat(prompt("dame la tercera medida de las caras del triangulo"))
    let baseTriangulo = parseFloat(prompt("dame la base de la cara inferior del triangulo"))
    let alturaTrianguo = parseFloat(prompt("dame la altura que tiene el triangulo midiendo desde la base asta la punta del triangulo "))
    triangulo(medidaCaraTriangulo1, medidaCaraTriangulo2, medidaCaraTriangulo3, baseTriangulo, alturaTrianguo)
} else if (figuraGeometrica === "circulo") {
    let radioCirculo = parseFloat(prompt("dame el radio del circulo"))
    circulo(radioCirculo)
} else {
    alert("no introdujo ninguna de las palabras asignadas")
}

const cuadrado = (caras) => {
    let perimetro = caras * 4
    let area = caras * caras
    alert("el area del cuadrado es " + area + " el perimetro del cuadrado es " + perimetro)
}

const triangulo = (cara1, cara2, cara3, base, altura) => {
    let perimetro = cara1 + cara2 + cara3
    let area = base * altura / 2
    alert("el area del triangulo es " + area + " el perimetro del triangulo es " + perimetro)
}

const circulo = (radio) => {
    let perimetro = 2 * 3.14159265359 * radio
    let area = 3.14159265359 * radio * radio
    alert("el area del circulo es " + area + " el perimetro del circulo es " + perimetro)
}






