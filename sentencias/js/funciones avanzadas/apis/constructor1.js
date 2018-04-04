function libro(autor , titulo, editorial, fecha, generos) {


    this.titulo = titulo,
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos,
    this.mostrarReferencia =  function (){ let ref = this.autor + `.`// la referencia `this`solo se pùede usar dentro de la propia función.
    ref += `"` + this.titulo + `"` + `.` 
    ref += this.editorial + `.` +this.fecha + `.`
    console.log (ref)
}





let libro1 = new libro(
  'El señor de los anillos',
  'J.R.R. Tolkien',
  'minotauto',
  new Date('1954'),
  ['Fantasia'], )

//console.log(libro1)

let libro2 = new libro('william Golson','Necromante','Minotauro',
new Date('1980'),
['SiFi'])
//siempre se puede modificar cualquier objeto
libro2.propietario = 'Nuria'
//console.log(libro2)

console.log(typeof libro1)
console.log(typeof libro2.constructor.name)

