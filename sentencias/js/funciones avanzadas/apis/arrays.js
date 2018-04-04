//aDatos es una INSTANCIA de array
let aDatos = [1,12,67]

aDatos2 = new Array(5)
console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = new Array(5, 23, 21, 5)
console.log(aDatos3)
let oDatos = {}
//new object()

let dni 
let code = dni%23
let aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
aLetras[code] 


console.log(aLetras.length)
// Metodos de Arrays
// Inmutables
// Mutables

////console.log(aLetras.join(''))
//console.log(aLetras)
 aLetrasOriginal = aLetras.slice(0,aLetras.length)// metodo inmutable de clonado de arrays
aLetras.sort()// mutables
console.log('copia No sort', aLetrasOriginal) 
aLetras.reverse()//nos cambia el array que tenemos reordenandolo
console.log('Reverse', aLetras)

// metode mutable
let aNuevo = aLetras.splice(0, 9,"x","z")//esto se utiliza para quitar un elemento del array (n,1) n posicion 1=elementos a quitar
console.log(aNuevo)
console.log(aLetras)

//Mutables
aLetras.push("")//añadir al final
aLetras.unshift("")//añadir al primero
aLetras.pop()//quitar ultimo
aLetras.shift()//quitar primero