function comprobarPalindromo(afrase = '') {

    let fraseArray = afrase.split(' ')
    console.log('Array', fraseArray)

    let fraseSin = fraseArray.join('')
    console.log('Join', fraseSin)

    let fraseAlreves = fraseArray.reverse()
    console.log('Reverse', fraseAlreves)

    let fraseSin2 = fraseAlreves.join('')
    console.log('Join', fraseSin2)

    let fraseMayus = fraseSin2.toLocaleUpperCase()
    console.log('Mayusculas', fraseMayus)


}
comprobarPalindromo('NO DESEO ESE DON')
comprobarPalindromo('en un lugar de la mancha')


function comprobarPalindromo(aFrase) {
    for (let i = 0; 1 < aFrase.length; i++) {
        if (aFrase[i] == fraseSin2) {
            console.log('esto es un palindromo')
            
        }else(
            console.log('esto no es un palindromo')
        )

       
        
    }
    
}

/* function Mostrar(aFrase) {
    aMensajes = [
        'Es un palindromo', +        'No es un palindromo',

    ]
    let sMensaje = `
        En la frase "${aFrase}"
        ${aMensajes[Comprobar(aFrase)]}`
    console.log(sMensaje)
} */

/* MostrarComprobarPalindromo('NO DESEO ESE DON')
MostrarComprobarPalindromo('en un lugar de la mancha') */
