class Persona {
    constructor(nombre, fecha, altura) {
        this.nombre=nombre
        this.fechaNacim=fecha
        this.altura=altura
    }

    _calcularAños() {
        let hoy =new Date()
        return  parseInt((hoy - this.fechaNacim)/(1000.*60*60*365))
       
    }
    saludar(){
        console.log(`Hola soy${this.nombre} y tengo ${this._calcularAños} `)
    }
    
}



persona1 = new Persona('Pepe', new Date(1995, 3, 3), 1.62)
persona1.saludar()

class Alumno extends Persona {
    constructor(nombre, fecha, altura, aula, equipo){
        super (nombre,fecha,altura)
        this.aula=aula
        this.equipo=equipo

    }
    
    saludar (){
        super.saludar()
        console.log(`Soy del equipo ${this.equipo}`)
    }

}

alumno1 = new Alumno ('Juan', new Date(1995, 3, 3), 1.62)
alumno1.saludar()