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
        this.domInpPasswd = document.querySelector('#password'.value)
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
        
        
    }
    tomarDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.aficiones = this.domSelectAficiones.value
        this.datos.passwd =  this.domInpPasswd.value
        this.datos.datos =  this.domAreaDatos.value
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }
    comprobarPass(){}	

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

  

   
}