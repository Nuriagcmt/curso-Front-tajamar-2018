
let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color: 9
}

/* for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(item)

}
console.log('array con for')
for (let i = 0; i < aDatos.length; i++) {
    const nombreDelaVariablequeItera = aDatos[i];

}
console.log('objeto con forin')
for (const key in oDatos) {

    const element = oDatos[key];
    console.log('item',key)
}
console.log('array con forin')
for (const item in aDatos) {

    const element = aDatos[item];
    console.log(item)
}
console.log('para arrays para recorrer el array sin hacer nada, no funciona con objetos')
for (const item of aDatos) {
console.log(aDatos)
    
}
aDatos.map() */
/* aDatos.forEach(function(item ){
    console.log(item) */


/* }) *///equivalente a invocar un bucle for sin ejecutarlo
let aDatos = [2, 5, 7, 4, 9]
aDatos.forEach(item=> console.log(item))
//map crea una proyeccion del original
let aCuadrados = aDatos.map(item =>  item * item)// esta funcion nos da un mapa de la función no modifica nada y me devuelve lo que yo le pase
console.log(aCuadrados)

let aPares = aDatos.filter(item =>item%2 === 0)
console.log(aPares)
/* cuadrados = (x)=> x*x
 */
let aImparesCuadrados = aDatos
    .filter(item=>  item%2!==0)
    .map(item =>  item * item)
    console.log(aImparesCuadrados)

let total = aDatos.reduce((prev, item)=> prev += item)
console.log(total)
//aDatos.reduceRight()//hace lo mismo pero al reves


/* aDatos.every()
aDatos.some() */