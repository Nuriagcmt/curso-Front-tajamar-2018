//let oDatos= new Object()= {}
let libro1 = {
  titulo: 'El hobbit',
  autor: 'J. R. R. Tolkien',
  editorial: 'Minotoauro',
  fecha: new Date(1954),
  generos: ['fantasia'],
  mostrarReferencia: function () {
    let ref = this.autor + '.'
    ref + '"' + this.titulo + '".'
    ref += this.editorial + '.' + this.fecha.getFullYear() + '.'
    console.log(ref)

  }
}
libro1.mostrarReferencia()

let miFuncion = function(){
  console.log('Soy una función')
  console.log(this)
}


miFuncion()

let o = {head:'Soy un objeto',metodo: miFuncion}
//o.metodo()
let oNuevoObjeto= new miFuncion()


let obj = {head:'Soy un objeto'}
miFuncion.call(obj)

/* libro1.propietario = "Nuria"
let libro2 = libro1
libro2.autor='Pepe'
 console.log(libro1.autor)
 */


//la función dentro del objeto es el METODO (README).

  //libro1.mostrarReferencia()




 /* 
 **/