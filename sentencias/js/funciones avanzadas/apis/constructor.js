function libro(autor , titulo, editorial, fecha, generos) {


    this.titulo = titulo,
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos
}





let libro1 = new libro(
  'El señor de los anillos',
  'J.R.R. Tolkien',
  'minotauto',
  new Date('1954'),
  ['Fantasia'], )

console.log(libro1)

let libro2 = new libro('william Golson','Necromante','Minotauro',
new Date('1980'),
['SiFi'])
libro2.propietario = 'Nuria'
console.log(libro2)
