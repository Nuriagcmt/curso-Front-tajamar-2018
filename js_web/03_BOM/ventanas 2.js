
function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    /* eBtnAbrir */
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentanas = []
    eBtnAbrir.addEventListener('click', btnClick)
    eBtnCerrar.addEventListener('click', btnClick)


    function btnClick(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case 'btnAbrir':
                ventana = window.open()
                aVentanas.push(ventana)
                togleButton()
             
                break
            case 'btnCerrar':
                aVentanas.forEach((item) => { item.close() })
                togleButton()
                aVentanas = []
               
                break
        }
    }


    function togleButton() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled


    }

}






/* app = function(){} es tres formas de hacer una función
app = () => {}  */

window.addEventListener('load', app)