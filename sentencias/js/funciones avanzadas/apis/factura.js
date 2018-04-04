function Factura(nosotros = new Empresa(),
                 cliente = new Empresa(),
                 formaDepago = '',
                 tipoIVA = 0) {
        this.nosotros = nosotros
        this.cliente = cliente
        this.formaDepago = formaDepago
        this.producto = []
        this.tipoIVA = tipoIVA
        this.total = 0
        this.IVA = 0
       
        this.calculoTotal = function () {
        this.producto.forEach(item => this.total = item.cantidad * item.precio)


    }
    this.mostrar = function () {
        let r = this.autor + `.`// la referencia `this`solo se pùede usar dentro de la propia función.
        ref += `"` + this.titulo + `"` + `.` 
        ref += this.editorial + `.` +this.fecha + `.`
        console.log (ref)

    }

}
function Empresa(params = {}) {//DE ESTA FORMA CONparams no hace falta que los objetos esten ordenadas
        this.nombre = params.nombre||'',
        this.direccion =params.direccion|| '',
        this.telefono = params.telefono||'',
        this.NIF = params.NIF||''
}
function Item(desc = ' ', precio = 0, cantidad = 0) {
        this.descripcion = desc,
        this.precio = presio,
        this.cantidad = cantidad

}






/* 
function return (` ${this.nosotros.nombre} */
    /*     ${this.nosotros.direccion}
        ${this.nosotros.telefono}
        ${this.nosotros.NIF}
...................................................................
                ${this.cliente.nombre}  
                ${this.cliente.direccion}
                ${this.cliente.telefono}  
                ${this.cliente.NIF} 
 */
      /*   `) */
let factura01 = new Factura(
    new Empresa({
        nombre: 'Tompla',
        direccion: 'Poligono Daganzo',
        telefono: '9174825477',
        NIF: 'B-47972457'
    }),
    new Empresa({
        nombre: 'Bankia',
        direccion: 'Calle Alcala',
        telefono: '915478521',
        NIF: 'B-47854712'
    }),


)


console.log(factura01)
