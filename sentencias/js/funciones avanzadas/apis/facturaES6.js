class Empresa {
    constructor() {
        this.nombre = params.nombre || ''
        this.direccion = params.direccion || ''
        this.telefono = params.telefono || ''
        this.NIF = params.NIF || ''
    }
}

class item {
    constructor(desc = '', precio = 0, cantidad = 0) {
        this.descripcion = desc
        this.precio = precio
        this.cantidad = cantidad
    }
}
class Factura {
    constructor(nosotros = new Empresa(),
        cliente = new Empresa(),
        formaPago = '',
        tipoIVA = 0) {

        this.nosotros = nosotros
        this.cliente = cliente
        this.productos = []
        this.formaPago = formaPago
        this.tipoIVA = tipoIVA
        this.total = 0
        this.IVA = 0
    }
}

calcularTotal() {
    let totalSinIva = 0
    this.productos.forEach(
        item => totalSinIva += item.cantidad * item.precio
    )
    this.IVA = totalSinIva * this.tipoIVA
    this.total = totalSinIva + this.IVA

}


addItem(){
    this.productos.push(
        new Item(desc, precio, cantidad)
    )
}



poin



listarItems = function () {
    let r = ``
    this.productos.forEach(item => {
        r += `${item.descripcion} - ${item.cantidad} /  ${item.precio}€
        `
    });
    return r

}
mostrar() {
    this.calcularTotal()
    return ` 
        -----------------------------
        ${this.nosotros.nombre}
        -----------------------------
            ${this.nosotros.direccion} 
            ${this.nosotros.telefono} 
            ${this.nosotros.NIF} 
        ---------------------------------------------------
                                ${this.cliente.nombre}
                                ${this.cliente.direccion}
                                ${this.cliente.NIF}
        ----------------------------------------------------
        ${this.listarItems()}
        -----------------------------------------------------
                                    Total Iva : ${this.IVA} €
                                    Total : ${this.total} €
                                    Forma de Pago : ${this.formaPago}
                    `
}


let factura01 = new Factura(
    new Empresa({
        nombre: 'Ediciones Boracay',
        direccion: 'c/ Pez, 1',
        telefono: '343532423',
        NIF: 'B-4395873'
    }),
    new Empresa({
        nombre: 'Libros Guacamayo',
        direccion: 'c/ Olmos, 22',
        telefono: '343343069',
        NIF: 'B-9843973'
    }),
    'contado', 0.22
)

factura01.addItem('El Señor de....', 40, 20)
factura01.addItem('Neuromante', 35, 30)
factura01.addItem('Dracula', 35, 20)

console.log(factura01.mostrar())


