//Funcion 'clasica' asignada a variables

let calcularCubo = function (a){
    return a*= a*a*a
}

//en E6 funcion "arrow" asignada a variables
//=>
//Formato extenso:
let calcularCuboES6Ext = (a) => {return a*a*a}

//abreviado
let calcularCuboES6Semi = a => a*a*a

//estas funciones son utiles para las funciones puras.
let a = 12
//setTimeout(console.log(calcularCuboES6), 2000)

setTimeout(function() {
 
    console.log(a*a*a)
   
},2000 )
setTimeout(()=>{
    a = 12
    console.log(a*a*a)
},3000)