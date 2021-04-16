let suma=0;
let limit = parseInt(prompt("¿Cuantos estudiantes quiere ingresar?"));
let matriz = new Array(n);
for(let i=0;i<limit;i++){
	matriz[i]= new Array(4);
}
for(let i=0; i<limit; i++){
	for(let j=0; j<4 ; j++){
		if (j==0) {
			matriz[i][j] = prompt("Nombre del estudiante");
		}else{
			matriz[i][j] = parseFloat(prompt("Nota del estudiante " + j));
		}
	}
}
for (let i=0; i<matriz.length; i++) {
	for(let j = 1; j<4 ;j++){
		suma+=matriz[i][j];
	}
	if ((suma/3) < 3) {
		console.log("El estudiante " + matriz[i][0] + " ha reprobado la materia." + "<br>");
	}else if ( (suma/3) >= 3){
		console.log("El estudiante " + matriz[i][0] + " ha aprobado la materia." + "<br>");
	}
}




