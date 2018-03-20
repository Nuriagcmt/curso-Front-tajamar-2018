//Clousure
//patron IIFE (Immediately-invoked function expression)




(function main(n) {


    function calcularCubo(a) {
        a = a * a * a
        return a}

        let mostrarResultado2 = function () {
          console.log(calcularCubo(n))
        }
        
        mostrarResultado2()
        

//estas  dos funciones son ===, al poner los parentesis la hemos combertido en main esto es closures
    })(6)

    (function (n) {


        function calcularCubo(a) {
            a = a * a * a
            return a}
    
            let mostrarResultado2 = function () {
              console.log(calcularCubo(n))
            }
            
            mostrarResultado2()
            
    
    
        })(6)
    


