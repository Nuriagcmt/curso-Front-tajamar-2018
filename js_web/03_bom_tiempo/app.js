//una sola vez en el tiempo
/* let idT = setTimeout(algo, 1000)
clearTimeout(idT) */





//Cada cierto tiempo
/* let crono = 0
let idI = setInterval(function() {
    crono++
}, 1000)
clearInterval(idI)  */
(function () {
    function app() {

        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button')
        let eCrono = document.querySelector('.crono')
        console.log(eCrono)

        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)
        });
        aBotones[1].disabled = true
        aBotones[2].disabled = true
        function btnClick(ev) {

            if (ev.target.id === 'btnIniciar') {
                aBotones[0].disabled = true
                aBotones[0].textContent = 'Continuar'
                aBotones[1].disabled = false

                idI = setInterval(function () {
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                }, 100)



            } else if (ev.target.id === 'btnParar') {
                aBotones[0].disabled = false
                aBotones[2].disabled = false
                clearInterval(idI)

            } else {
                aBotones[0].disabled = false

                crono = 0
                eCrono.innerHTML = crono.toFixed(2)
            }
        }
    }

    window.addEventListener('load', app)
})()