let ayer = new Date(2018,2,20,1)
console.log(ayer)

 let hoy= new Date()
 let unDia = new Date(4665765467654)
 console.log(unDia)

/* console.log(hoy.getDay())
console.log(hoy.getFullYear())  */
console.log(hoy.getTime())
//let n= hoy-ayer
console.log(parseInt((hoy-ayer)/(1000*60*60)))
