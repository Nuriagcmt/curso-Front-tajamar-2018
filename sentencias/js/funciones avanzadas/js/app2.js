function calcularCuadrado(a) {
    a *= a
    return a
    
}

//los parametros ELEMENTALES pasan por valor.
let a = 5
console.log(calcularCuadrado(a))
console.log(a)


//los parametros referencia pasan como si fueran referencia
// es habitual pasar un clon del objeto.
function calcularCubo(params) {
    let r 
 
   r = params.valor * params.valor*params.valor
    return r}

    params = {valor : 5}

    console.log(calcularCubo(Object.assign({}, params)))///hemos puesto codigo dentro de codigo para que se haga un clon y prtejer el original
    console.log(params)
/* 
let oUser= {nombre='Pepe',apellido: 'Perez'}
console.log(oUser) */
//transformar un objeto en String JSON
   // JSON.stringify()
   let sUser = JSON.parse(sUser)
   console.log(sUser)
