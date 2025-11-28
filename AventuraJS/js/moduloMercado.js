import Producto from "./clases/Producto.js";
import { PRODUCTOS, RAREZAS, TIPOS } from "./constantes.js";

export const productos = PRODUCTOS.map(prod =>
    new Producto(
        prod.nombre,
        prod.imagen,
        prod.precio,
        prod.rareza,
        prod.tipo,
        prod.bonus
    )
);

export function filtrarProductos(rareza) {
    return productos.filter(producto => producto.rareza === rareza);
}

export function aplicarDescuento(tipo = null, rareza = null, descuento = 100) {
    return productos
        .filter(producto => {
            if (tipo && rareza) {
                return producto.tipo === tipo && producto.rareza === rareza;
            } else if (tipo) {
                return producto.tipo === tipo;
            } else if (rareza) {
                return producto.rareza === rareza;
            }
            return true;
        })
        .map(producto => producto.aplicarDescuento(descuento));
}

export function buscarProductos(nombre) {
    const nombreLower = nombre.toLowerCase();
    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(nombreLower)
    );
}

export function obtenerPorTipo(tipo) {
    return productos.filter(producto => producto.tipo === tipo);
}

export function obtenerProductoAleatorio() {
    const index = Math.floor(Math.random() * productos.length);
    return productos[index];
}