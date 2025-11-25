let cuchilla = new Producto("Cuchilla", "objects\Cuchilla.png", "1€", "Comun", "Arma", "1")
let david = new Jugador("David", "characters\David.png")

console.log(david.obtenerAtaqueTotal)


import { showScene } from "./util.js";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btn-to-scene-2")
        .addEventListener("click", () => showScene("scene-2"));

    document.getElementById("btn-to-scene-3")
        .addEventListener("click", () => showScene("scene-3"));

});

