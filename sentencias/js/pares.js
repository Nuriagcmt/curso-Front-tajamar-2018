'use strict'
//funcion que comprueba el argumento es par o impar, devolviendo  0, 1 o -1 si el argumento no es numero par
/* 
function calcPar(n){
    return isNaN(n/2) ? -1 : n%2 */
}
//funcion que comprueba el argumento es par o impar, devolviendo  0, 1 o -1 -2 (si el argumento tiene decimales) si el argumento no es numero par

function calcularPar(n) {
    let r = 0
    if (isNaN(n / 2)) {
        r = -2
    } else if (parseInt(n) != parseFloat(n)) { 
        r = -2 
    } else {
        r = -3
    } else {
        r = n % 2
    }
    return r

}
function test(n) {
    console.log(n)
}



testcalcularPar('Pepe'),
testcalcularPar(12),
testcalcularPar(11),
testcalcularPar(12.5),
testcalcularPar(11.5),


    function mostrarEspar(n) {
        const aMensajes = [
            `El numero ${n} es PAR`,
            `El numero ${n} es IMPAR`,
            `El número ${n}es decimal`,
            `El dato ${n} no es un número`


        ]

        // r puede valer 0,1 o -1
        let r = calcularPar(n)
        // r = (r===-1) ? 2:r

        //si r es -1, lo convierto en dos
       /*  if (r === -1) { r = 2 }
        if (r === -2) { r = 3 } */
if (r < 0) {}
        //muestro la posicion r del array
        console.log(aMensajes[r])

    }
// Test

mostrarEsPar('Pepe')
mostrarEsPar(12)
mostrarEsPar(11)
mostrarEsPar(12.5)
mostrarEsPar(11.5)




//function comprobar(resultado){
   /*  let a = 2
    if(a%2==0){
        console.log(0)
    }else{
        console.log(-1)
    } */

//}

//comprobar()

function mostrarEsParCasos (n) {
    let r= calcularPar(n)
    switch(r){
        case 0:
        mensaje = `El numero ${n} es PAR`,
        break
    
        case 1:
        mensaje = `El numero ${n} es IMPAR`,
        break
        case 2:
        mensaje = `El dato ${n} no es un numero`,
        break
        case 3:
        mensaje = `El numero ${n} es decimal`,
        break
    }
    console.log(mensaje)
}
   
