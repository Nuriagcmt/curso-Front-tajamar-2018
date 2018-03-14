'use strict'
// a y b son argumentos

function sumar(a, b) {
   var c = a + b
    console.log("El resultado es ", c)
    return c//esto es un adeclaración.
}//FIN DE LA FUNCIÓN SUMAR
//Parametros 
sumar(123, 34);
sumar(45, 56);

//los parametros son los numeros reales que yo quiero que se realice la función, y a y  b son los argumentos con los que se recibe. MUCHO CUIDADO CON MAYUSCULAS Y MINUSCULAS
function restar(a, b) {
    var c = a - b
    console.log("el resultado es ", c)
    return c
}
restar(10, 4);
restar(75, 45);