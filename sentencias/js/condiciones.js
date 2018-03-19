
const userPepe = {

    nombre: 'juan',
    apellidos: 'Perez',
    edad: 23,
    isCasado: false,
    aficiones: ['deporte', 'papiroflexia'],
    genero: 'M',
}
const userMaria = {

    nombre: 'Maria',
    apellidos: 'Perez',
    edad: 53,
    isCasado: true,
    aficiones: ['papiroflexia', 'lectura'],
    genero: 'F',
}

//if ( userMaria.isCasado){ 
//  if (userMaria.genero == 'M'){
//      console.log('Saludos a tu marido')

const MAYORIAEDAD = 18

function crearSaludo(user) {
    let mensaje = 'Hola'
    //mensaje = mensaje + user. nombre
    if (user.edad >= MAYORIAEDAD && user.genero == 'M') {
        mensaje += 'D'
    }
    else if (user.edad >= MAYORIAEDAD && user.genero == 'F') {
        mensaje += 'Dña.'
    }



    mensaje += user.nombre
    if (user.isCasado) {
        if (userMaria.genero == 'M') {
            //console.log('Saludos a tu marido')
            mensaje += '. Saludo a tu mujer'
        }
        else {
            mensaje += '. Saludos a tu marido'
        }

    }

    return mensaje



}
function saludar(user) {
    console.log(crearSaludo(user))
}

function saludarHtml(user) {
    document.write(crearSaludo(user) + '<br>')}

/* //saludar(userMaria) */
saludar(userPepe)
saludarHtml(userMaria)
saludarHtml(userPepe)

if (1) { }
else { }

if (1) { }
else if (2) { }
else if (3) { }
else { }
