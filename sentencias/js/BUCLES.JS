let aDatos = [23, 54, 25,74,54,85] 

for (let i = 0; i<6;i++){

    console.log ("hola a todos, esta es la vuelta",i+1)

}
  let total= 0  
for (let i = 0; i < aDatos.length; i++) {
    //total+= aDatos[i];
    total = total + aDatos[i]
    console.log( `El parcial es ${(total)}`)
}
total=0
for (let i = 6; i>6;i--){

    console.log ("Adios a todos, esta es la vuelta",i+1)}


    console.log( `El total es ${(total)}`)
 total=0
for (let i = aDatos.length;i>0;i--){
    total =total + aDatos[i]
}
console.log( `El total al reves ${(total)}`)