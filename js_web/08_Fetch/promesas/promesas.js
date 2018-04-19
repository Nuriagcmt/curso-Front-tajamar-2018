//Mock de una promesa(maqueta)



function asincP(){
return new Promise(
    (resolve, reject)=>{
        
        setTimeout(
            ()=>{
                let number = Math.random()
                if(number > 0.7){ resolve(number)
                    //correcto
                }else{ reject(number)
                    //incorrecto
                }
                
            }, 3000
        )

    })
}
asincP()
.then(
    (response)=>{console.log(`todo bien gracias a ${response}`)},
    (response)=>{console.log(`error debido a ${response}`)}
)