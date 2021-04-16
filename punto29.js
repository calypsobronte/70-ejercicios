var limit = parseInt(prompt("cuantas veses quieres que se ejecute la serie fibonacci"))+1;
var fibonacci = [0,1];
for(i=2; i <=limit; i++){
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    console.log(fibonacci[i]+"<br/>");	
}





