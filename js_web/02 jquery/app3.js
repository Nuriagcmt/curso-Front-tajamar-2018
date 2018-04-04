/* $(document).ready(
    function(){

    }
) */

$(function(){
    let oDom = {
        eBotonSaludar: $('#btSaludar'),
        eBotonBorrar: $('#btBorrar'),
        eImputName: $('#inpName'),
        eOutSaludo: $('#outSaludo')
    }
    function saludar(){
        let user = oDom.eImputName.val()
        console.log(user)
        oDom.eOutSaludo.html(`<p>hola${user}</p>`) 
    }
    function borrar(){
        oDom.eInputName.val('')
        oDom.eOutSaludo.html('')
    }

    oDom.eBotonSaludar.on('click',  Saludar)
    oDom.eBotonBorrar.on('click',  Borrar)
})
