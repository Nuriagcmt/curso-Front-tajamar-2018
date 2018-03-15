
'user strict'

// es6 existen let y cont con ambito ()

function mostrar() {
    const X = 2

    {
        const X = 23
    }


    console.log(X)

}


function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}
const x = 5
mostrar()
function mostrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`la circunferencia de radio ${radio}
    tiene una longitud ${cir})`)
}
const X = 5
mostrar()
mostrarCircunferencia(5)












