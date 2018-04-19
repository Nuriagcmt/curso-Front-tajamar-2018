import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '', 
            nacimiento: '',
            email: '',
            passwd: '', 
            datos: '',
            curso: {},
            aficiones:[],
            asignaturas: []
        }
   
        this.entrarDom()   
        this.definirManejadores()
    }

    entrarDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPw_usua = document.querySelector('#password'.value)
        this.domAreaDatos = document.querySelector('#datos')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectAficiones = document.querySelector('#aficiones')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domFieldAcedemic = document.querySelector('#acedemic')
       
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
    
        this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))
    }
    
    
    
    enviar(ev) {
        console.log(ev)
        this.recogerDatos()
        this.presentarDatos()
        if (!this.isLeido) {
            ev.preventDefault()
        }
    }
    tomarDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.aficiones = this.domSelectAficiones.value
        this.datos.pw_usua =  this.domInpPw_usua.value
        this.datos.pw_usua2 =  this.domInpPw_usua.value
        this.datos.datos =  this.domAreaDatos.value
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }
    comprobarPass(){
        let msg="";
        if (domPw_usua.value !=domPw_usua2.value){
            msg="las contraseñas no coinciden"
        }
        domPw_usua2.setCustomValidity(msg)
    }	

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value, 
            text: nodo.options[index].textContent
        }    
    }

    presentarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('mostrar')
        let topics = CURSOS[ev.target.selectedIndex-1].asignaturas
        let HTMLResult = ''
        topics.forEach( elem => HTMLResult +=`<option>${elem}</option>` )
        this.domDivTopics.classList.remove('mostrar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

  
    presentarDatos() {
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)
   
    }
}