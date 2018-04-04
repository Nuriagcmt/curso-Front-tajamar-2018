(function () {


    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector('#btSaludar'),
            eBotonBorrar: document.querySelector('#btBorrar'),
            eImputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludo')
        }

        
    }
    //oDom.eBotonSaludar.onclick = ()=>{saludo()}

    let saludar = () => {
        let user = oDom.eImputName.value
       
        console.log(user)

        oDom.eOutSaludo.imperHTML = `<p>hola${user}</p>`


        //console.log(`hola ${user}`)

    }
    oDom.eBotonSaludar.addEventListener('click',  Saludar)
    oDom.eBotonBorrar.addEventListener('click',  Borrar)


    window.addEventListener('load', app)

})()











//saludo('Pepe')
// Cuando onclick en button ->"saludo('Amigo')"
