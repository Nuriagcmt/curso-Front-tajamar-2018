// declaracion de la funcion
// hitting de funciones (alzamiento de funciones)
// invocación de la funcion


function mostrar(n) {
    console.log(`me han pasado ${n}`)
}

mostrar('Pepe')

// creados por el construccion Funcion 
/* var suma = new Function("a", "b", "returna+b")
var x = new Object()
 var aDatos =  new Array() */
// Funcion === Objeto

//Función anonima
//Asignación de la funcion a una variable
let mostrarVariable = function (n) {
    console.log(`me han pasado ${n}`)
}

//invocar a funcion

mostrarVariable('Juan')
