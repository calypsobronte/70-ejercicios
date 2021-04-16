// Primer forma
const palindromo = (cadena) => {      //funcion para validar si es o no un palindromo
    return cadena.split("").reverse().join("") == cadena;  //retornamos la cadena con .split
    //utilizando un reverse y join para la union de la cadena
}

// Segunda forma
const palindromo2 = (cadena) => {//funcion para validar si es o no un palindromo
    let l = cadena.length;

    for (let i = 0; i < l / 2; i++) {
        if (cadena[i] !== cadena[l - 1 - i]) {
            return console.log("NO PALINDROMO");
        }
        else {
            return console.log("SI PALINDROMO");
        }
    }
}

palindromo("osoa")
palindromo2("facilidad de amar");