
//objeto literal
//los objentos estan formados por propiedades que a su vez son valores..

let nombre = 'Pepe'
let edad = 23
let isCasado = true
let algo   
let nulo = null
let user = {
    nombre : 'Pepe',
    apellidos : 'Perez',
    edad : 23,
    isCasado : true,
    direccion: {
        calle:'' ,
        ciudad:'' ,
        c_postal:'' ,
    }

}


console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof isCasado)
console.log(typeof algo)
console.log(typeof nulo)
console.log(typeof user)



user.cargo = 'ceo'
console.log(user)

//otros tipos de objetos

// array ES un canjuntos de propiedades que en lugar de tener una clave se indexan númericamente, no se definen el tamaño, crece y decrece a tu antojo y puedo tener todo tipos de datos  
// para los arrays se utilliza [] en lugar de {}
let aDatos = [12, 23,45, 45, 87]
let aDatosChungos = [12,'pepe', true,null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15]=30
console.log(aDatos)

aUsuario = [
    {nombre : 'Pepe',
    apellidos : 'Perez',
    edad : 23,
    isCasado : true,
    direccion: '',
        calle:'' ,
        ciudad:'' ,
        c_postal:'' },

        
       { nombre : 'Pepe',
        apellidos : 'Perez',
        edad : 23,
        aficiones:'deporte',
        isCasado : true,
        direccion:'' ,
            calle:'' ,
            ciudad:'' ,
            c_postal:'' ,}
           
]

console.log(typeof aUsuario)
console.log(array.isArray(aUsuarios))


user.sueldo = 11000
console.log(user)
//string
//number
//booleam

//function, Method, Contructor

let fecha = new Date ()
let exp = new RegExp ()
let error = new Error()


 // Math.cos (90)
 // JSON.parse()
