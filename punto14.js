var ventasDiarias = [];
var list = [];
let suma=0;
for(let i=0; i<4; i++){         
	alert("Semana " + (i+1)); 
	for (let j=0; j<7; j++) {
		list.push(parseInt(prompt("Ingrese las ventas del día " + (j+1))));
	}
	ventasDiaria.push(list);
} 
for(let i=0; i<ventasDiarias.length;i++){
	for(let j=0; j<7; j++){
		suma += ventasDiaria[i][j]; 
	}
}
let promedio = suma/28;
if (promedio>10000) {
	console.log("Promedio es mayor a 10.000,"+"<br/>"+"Las ventas de la primera semana " + ventasDiarias[0]); 
}else if(promedio<10000){
	console.log("Promedio es menor a 10.000,"+"<br/>"+"Las ventas de la última semana " + ventasDiarias[ventasDiarias.length-1]);
}







