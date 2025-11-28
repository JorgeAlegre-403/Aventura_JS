class Producto {

    constructor(nombre, imagen, precio, rareza, tipo, bonus) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bonus = bonus;
    }

    
    formatearPrecio() {
        return (this.precio / 100) + "€";
    }
    aplicarDescuento(descuento) {
        const precioFinal = Math.max(0, this.precio - descuento);
        return new Producto(
            this.nombre,
            this.imagen,
            precioFinal,
            this.rareza,
            this.tipo,
            this.bonus
        );
    }
}

export default Producto;