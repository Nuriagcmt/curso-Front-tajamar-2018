let libro = {   //con let ya tengo una variable estoy creando un objeto modelo de datos
    titulo: '',
    autor: '',
    editorial: '',
    fecha: 0,
    generos: [],//escribir un array

}//esto seria una plantilla
{

    let libro1 = Object.create(libro)
    let libro2 = Object.create(libro)

    libro1.autor = 'J. R. R. Tolkien'
    libro1.titulo = 'El hobbit'
    libro1.editorial = 'Minotoauro'
    //libro1.fecha = '1954'
    //libro1.generos = [fantasia]


    libro2.autor = 'william  Gilson'
    libro2.titulo = '_Necromante'
    libro2.editorial = 'Minotauro'
    //libro1.fecha = '1954'
    //libro1.generos = [fantasia]


    console.log(libro1)
    console.log(libro2)
}

let libro1 = {
    titulo: 'El hobbit',
    autor: 'J. R. R. Tolkien',
    editorial: 'Minotoauro',
    fecha: 1954,
    generos: ['fantasia'],
}
let libro2 = {
    titulo: 'necomante',
    autor: 'william  Gilson',
    editorial: 'Minotoauro',
    fecha: 1954,
    primera_edicion: {
        editorial: "acme",
        fecha: 1980
    },
    generos: ['scFi', 'CyberPunk'],
}

libro1.personajes = []
//let user= 'Pepe'
//console.log(libro1)
//console.log(`el autor es ${libro2.autor}`)
//console.log(typeof libro2.autor)
//console.log(libro2.fecha)
//console.log(typeof libro2.fecha)
//console.log(typeof libro2.generos[0])
for (let key in libro1) {
    console.log(`la clave ${key} vale` , libro1[key])
    

}
for (let key in libro2) {
    console.log(`la clave ${key} vale` , libro2[key])}//esto es un bucle y me va a ascar todoos los datos que tenga en la plantilla.





