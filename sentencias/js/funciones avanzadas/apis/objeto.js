let libro1 = {
    titulo: 'El hobbit',
    autor: 'J. R. R. Tolkien',
    editorial: 'Minotoauro',
    fecha: 1954,
    generos: ['fantasia'],
    mostrarReferencia: function (){ let ref = this.autor + `.`// la referencia `this`solo se pùede usar dentro de la propia función.
    ref += `"` + this.titulo + `"` + `.` 
    ref += this.editorial + `.` +this.fecha + `.`
    console.log (ref)
}
}//la función dentro del objeto es el METODO (README).

  libro1.mostrarReferencia()
  
  let x = 'Pepe'
  console.log (isNaN(x))
//wrapper objects(objetos envolventes)
console.log(x.toUpperCase())
console.log(x.length)
let sFrase = 'un anillo para controlarlos a todos'

let aDatos = sFrase.split(' ')
console.log(aDatos)

let nuevaFrase = aDatos.join('')
console.log(nuevaFrase)

