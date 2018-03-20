
function calcularCuadrado (a){
    a*=a
    return a
}

function calcularCubo (a){
    a=a*a*a
    return a
}
function Mostrarcalculo (n,f){
    console.log(`el resultado es ${f(n)}`)
  
    
}
 let n=5
 //function mostrarResultado1(n){
    // console.log(n)
 //}

 Mostrarcalculo(n, calcularCuadrado)
 Mostrarcalculo(n, calcularCubo)
 Mostrarcalculo(n, function(){
    return n*2
})


setTimeout(mostrarResulatdo1 , 1000)
setTimeout(mostrarResulatdo2 , 2000)
setTimeout(function (){
    console.log(calcularCubo(n))
}, 3000)


for (let i = 0; i < 100; i++) {
    console.log(i);
    
}

let x = mostrarResulatdo1
x()


let y = { nombre: 'Pepe'}
console.log(typeof mostrarResulatdo1)
console.log(typeof mostrarResulatdo2)

