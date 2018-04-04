
function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    eBtnAbrir
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentanas = []
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)


    function btnAbrir() {
        ventana = window.open()
        togleButton()
        aVentanas.push(ventana)
        console.log(aVentanas)
      



    }

    function togleButton() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled


    }
    function btnCerrar() {
        aVentanas.forEach((item) => { item.close() })
        togleButton()

        aVentanas = []

    }

}





/* app = function(){} es tres formas de hacer una función
app = () => {}  */

window.addEventListener('load', app)