import { exists } from "fs";

//operador de asignacion
let x = 25
//instruccion que implica que tiene un efecto secundario. side efecct
console.log(x) 

x++  //expresion acortada de x= x+1

console.log(x) 

x-- //x = x-1

let z = ++x
// operadores aritmeticos.

x = 27

y = parseInt(x/5) //5
console.log(y)
let r = x % 5
console.log(r)

y = x/5
console.log(y)


//operadores de asignacion aritmetica

x=12
x+= 4 //x= x + 4
console.log(x)

//operadores relacionales

x= 12
y= '12'
console.log(x==y)
console.log(x===y)
console.log(x!=y)
console.log(x!==y)

if (x){
    console.log('estoy dentro del if')//es lo evalua directamente de forma buliana
}

if (x===12){
    console.log('estoy dentro del if otra vez')//estara dentro de if si x es 12
}

if (!!x){
    console.log('estoy dentro del if negativamenta')// para combertir una cosa en buliano basta con negarlo dos veces, 
}



x = 'abc'
y ='def'

console.log(x<y)

console.log(x.length === y.length)
//operadosr ternario
// expresion? lo que quiero que pase si es true : lo que quiero que pase si es false

let edad= 35

console.log(edad>30? 'Buenos dias': 'hola chaval!!')

let a = 12
let b = 2
let c = 4

//if( a > c || a < z ) {
   // console.log('comprobado')

}

{console.log (2*4+5)}







