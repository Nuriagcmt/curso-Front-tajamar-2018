//elementos -> por valor
//number, string y boolean

let x = 12
let y =  2*x
 x = x + 2

console.log(y)//24
console.log(x)//14


//los objetos o datos referenciados se manipulan por referencia
let o1 = { valor: 12}
let o2 = o1
o1.valor = 24
console.log(o1)//24
console.log(o2)