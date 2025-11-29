export function distinguirJugador(puntuacion, umbral = 500) {
    return puntuacion >= umbral ? "Veterano" : "Novato";
}