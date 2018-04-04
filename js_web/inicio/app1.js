(function () {


    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector('#btSaludar')
        }
    }
        //oDom.eBotonSaludar.onclick = ()=>{saludo()}

        let saludo = (of, user = 'amigo') => {
            console.log(`hola ${user}`)
        }
        oDom.eBotonSaludar.addEventListener('click', () => saludo(event, "Pepe"))
        //oDom.eBotonSaludar.removeEventListener('click',)
       window.addEventListener('load', app)
       
    }) ()

}









//saludo('Pepe')
// Cuando onclick en button ->"saludo('Amigo')"
