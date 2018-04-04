
function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImagen = document.querySelector('#btnImagen')
    eBtnAbrir
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentanas = []
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImagen.addEventListener('click', btnImagen)
    eBtnCerrar.addEventListener('click', btnCerrar)


    function btnAbrir() {
        ventana = window.open()
       
        aVentanas.push(ventana)
        ventana.document.write('<p>documento recien creado</p>')
      
      



    }
    function btnAbrir() {
        ventana = window.open()
       
        aVentanas.push(ventana)
        ventana.document.write('<p>documento recien creado</p>')
      
      



    }
    function btnImagen() {
        ventana = window.open()
       
        aVentanas.push(ventana)
        
      
      



    }


    function btnGoogle() {
        ventana = window.open('http://google.es', '',
    'top=200, left=300, width=400, height=300, status= yes, menubar=yes,')
       
        aVentanas.push(ventana)
        console.log(aVentanas)
      



    }

    }
    function btnCerrar() {
        aVentanas.forEach((item) => { item.close() })
       
        aVentanas = []

    }







/* app = function(){} es tres formas de hacer una función
app = () => {}  */

window.addEventListener('load', app)