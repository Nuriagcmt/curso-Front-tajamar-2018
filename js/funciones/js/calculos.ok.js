'use strict'
// a y b son argumentos

function sumar(a, b) {
    var c = a + b

    return c
}

function restar(a, b) {
    var c = a - b
    return c
}

function mostrar(r) {
    console.log("el resultado es:", r)
}



var x = 123;
var y = 14;
var r = sumar(x, y);
mostrar(r);
console.log("el resultado es: ", sumar(123, 34));
mostrar(sumar(123, 34));
mostrar(sumar(45, 56));


var x = 123;
var y = 14;
var r = restar(x, y)
mostrar(r);

//console.log("el resultado es: ", restar(123, 34));
//mostrar(restar(123, 34));
//mostrar(restar(45, 56));


