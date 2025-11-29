export function combate(enemigo, jugador) {
    let vidaJugador = jugador.obtenerVidaTotal();
    let vidaEnemigo = enemigo.vida;
    
    const ataqueJugador = jugador.obtenerAtaqueTotal();
    const defensaJugador = jugador.obtenerDefensaTotal();
    const ataqueEnemigo = enemigo.nivelAtaque;
    
    while (vidaJugador > 0 && vidaEnemigo > 0) {
        vidaEnemigo = vidaEnemigo - ataqueJugador;
        
        if (vidaEnemigo <= 0) break;
        
        vidaJugador = (vidaJugador + defensaJugador) - ataqueEnemigo;
    }
    
    const ganador = vidaJugador > 0 ? "jugador" : "enemigo";
    
    let puntos = 0;
    if (ganador === "jugador") {
        puntos = 100 + ataqueEnemigo;
        
        if (enemigo.multiplicador) {
            puntos = Math.floor(puntos * enemigo.multiplicador);
        }
    }
    
    return { ganador, puntos };
}