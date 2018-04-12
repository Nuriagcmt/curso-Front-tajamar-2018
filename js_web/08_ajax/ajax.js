function app() {
    document.querySelector("#btnAjax")

        .addEventListener('click', getDatos)
    document.querySelector("#btnAjaxItem")

        .addEventListener('click', getDatos)
        //document.querySelector("#btnAjaxBorrar")

        //.addEventListener('click', deleteDatos)

        
            
    function getDatos(ev) {
        let ajax = new XMLHttpRequest()
        ajax.onreadystatechange = statechange

        function statechange(ev) {
            console.log("Cambio de estado")
            let metodo  = "GET"
            let url = ""
            if (ev.target.id == "btnAjax") {
                let url = 'http://localhost:3000/posts'
            } else {
                let item = document.querySelector('#item').value
                if (item){
                    url = 'http://localhost:3000/posts/'+item
                }else{
                    return
                }
                }
               

            console.log(ajax.readyState)
            if (ajax.readyState === 4) {

                console.log("Comunicacion Ok")
                if (ajax.status === 200) {
                    let response = JSON.parse(ajax.responseText)
                    console.dir(response)


                } else {
                    console.log(ajax.status)
                    console.log(ajax.statusText)
                }

            }
        }

        //let metodo = 'GET'
        //let url = 'http://localhost:3000/posts'
       
    }
    ajax.open(metodo, url)
    ajax.send(null)
}



window.addEventListener('load', app, false)