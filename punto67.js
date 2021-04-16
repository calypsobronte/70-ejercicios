let nombre = prompt("Ingrese su nombre");
while (true) {
    if (nombre.length > 3) {
        NumText(nombre)
        break
    } else {
        nombre = prompt("ingrese un nombre mayor a tres caracteres")
    }
}
function NumText(string) {
    var out = '';
    //Se añaden las letras invalidas
    var filtro = '-;:.,[]{}^+´~*´¨#!°°||/""%&()=!$@QWERTYUIOPASDFGHJKLÑZXCVBNM';//Caracteres invalidos

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    if (out != '') {
        alert("su nombre contiene caracteres no permitidos o invalidos")
        while (true) {
            var n = prompt("Ingrese su nombre");
            if (n.length > 3) {
                NumText(n)
            } else {
                nombre = alert("ingrese un nombre mayor a tras caracteres")
            }
        }
    } else if (out == '') {
        return alert("su nombre no contiene caracteres invalidos ")
    }
}



