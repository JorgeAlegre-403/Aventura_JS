class Jugador {

    constructor(nombre, avatar) {
        this.nombre = nombre;
        this.avatar = avatar;
        this.puntos = 0;
        this.vida = 100;
        this.vidaMaxima = 100;
        this.inventario = [];
    }

    añadirProducto(producto) {
        // Clonamos el producto como un objeto simple
        const productoClonado = {
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio,
            rareza: producto.rareza,
            tipo: producto.tipo,
            bonus: producto.bonus
        };
        this.inventario.push(productoClonado);
    }

    sumarPuntos(p) {
        this.puntos += p;
    }

    obtenerAtaqueTotal() {
        let total = 0;
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].tipo === "Arma") {
                total += this.inventario[i].bonus;
            }
        }
        return total;
    }


    obtenerDefensaTotal() {
        let total = 0;
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].tipo === "Armadura") {
                total += this.inventario[i].bonus;
            }
        }
        return total;
    }

    obtenerVidaTotal() {
        let total = this.vida;
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].tipo === "Consumible") {
                total += this.inventario[i].bonus;
            }
        }
        return total;
    }

    reiniciar() {
        this.puntos = 0;
        this.vida = this.vidaMaxima;
        this.inventario = [];
    }
}

export default Jugador;