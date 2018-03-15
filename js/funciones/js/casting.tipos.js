function main (){
    let num1 = 23
    let num2 = '20' 
    
    
    let r = num1 - num2
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)
    
    let x = 'hola'
    let y = 'Pepe'
    
    console.log (x+y)// el resultado es holaPepe
    
    
    r= num1+ num2// la suma en esta ocasion sera concatenacion. porque no le ponemos el let y no le ve como valor.
    console.log(r)
    console.log(typeof r)
    
    r= num1+ Number(num2)// al poner Number si lo reconoce como número
    console.log(typeof r)
    
    r= num1+ +num2// al ponerle el signo + lo reconoce como suma, solo pasa con la suma
    console.log(r)
    console.log(typeof r)
    r = num1-x // nan number
    console.log(r)
    console.log(typeof r)
    r = 1/0  //infinite numbre
    console.log(r)
    console.log(typeof r)
    r = 0/0  
    console.log(r)
    console.log(typeof r)
    console.log(isNaN)
    
 main()



