export function showScene(id) {
    document.querySelectorAll(".scene").forEach(
        element => element.classList.remove("active")
    );
    
    const escenaSeleccionada = document.getElementById(id);
    
    if (escenaSeleccionada) {
        escenaSeleccionada.classList.add("active");
        console.log(`Mostrando escena: ${id}`);
    } else {
        console.error(`No se encontró la escena con ID: ${id}`);
    }
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatearPrecio(cantidad) {
    return (cantidad / 100).toFixed(2).replace('.', ',') + "€";
}

export function animarElemento(elemento, clase, duracion = 1000) {
    elemento.classList.add(clase);
    setTimeout(() => {
        elemento.classList.remove(clase);
    }, duracion);
}