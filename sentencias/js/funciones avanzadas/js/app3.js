
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
 Mostrarcalculo(n, calcularCuadrado)
 Mostrarcalculo(n, calcularCubo)
 Mostrarcalculo(n, function(){
    return n*2
})

setTimeout(function (){
    console.log(calcularCubo(n))
}, 3000)

for (let i = 0; i < 10000; i++) {
    console.log(i);
    
}