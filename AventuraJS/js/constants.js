//  PUNTUACIÓN 
export const PUNTUACION_BASE = 100;
export const UMBRAL_VETERANO = 500;

//  RAREZAS
export const RAREZAS = {
    COMUN: "Común",
    RARA: "Rara",
    EPICA: "Épica",
    LEGENDARIA: "Legendaria"
};

// TIPOS DE PRODUCTOS
export const TIPOS = {
    ARMA: "Arma",
    ARMADURA: "Armadura",
    CONSUMIBLE: "Consumible"
};

// PRODUCTOS DEL MERCADO
export const PRODUCTOS = [
    // ARMAS
    {
        nombre: "Daga",
        imagen: "./AventuraJS/objects/Dagger.png",
        precio: 300,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMA,
        bonus: 10
    },
    {
        nombre: "Cuchilla",
        imagen: "./AventuraJS/objects/Cuchilla.png",
        precio: 500,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMA,
        bonus: 15
    },
    {
        nombre: "Pistola",
        imagen: "./AventuraJS/objects/Pistola.png",
        precio: 800,
        rareza: RAREZAS.RARA,
        tipo: TIPOS.ARMA,
        bonus: 25
    },
    {
        nombre: "Katana",
        imagen: "./AventuraJS/objects/Katana.png",
        precio: 1200,
        rareza: RAREZAS.EPICA,
        tipo: TIPOS.ARMA,
        bonus: 35
    },
    {
        nombre: "Fusil",
        imagen: "./AventuraJS/objects/Fusil_1.png",
        precio: 1500,
        rareza: RAREZAS.EPICA,
        tipo: TIPOS.ARMA,
        bonus: 40
    },
    {
        nombre: "Fusil Avanzado",
        imagen: "./AventuraJS/objects/Fusil_2.png",
        precio: 2000,
        rareza: RAREZAS.LEGENDARIA,
        tipo: TIPOS.ARMA,
        bonus: 50
    },
    
    // ARMADURAS
    {
        nombre: "Armadura Ligera",
        imagen: "./AventuraJS/objects/Armadura.png",
        precio: 400,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 12
    },
    {
        nombre: "Armadura Reforzada",
        imagen: "./AventuraJS/objects/Armadura.png",
        precio: 900,
        rareza: RAREZAS.RARA,
        tipo: TIPOS.ARMADURA,
        bonus: 20
    },
    {
        nombre: "Armadura Pesada",
        imagen: "./AventuraJS/objects/Armadura.png",
        precio: 1400,
        rareza: RAREZAS.EPICA,
        tipo: TIPOS.ARMADURA,
        bonus: 30
    },
    
    // CONSUMIBLES
    {
        nombre: "Poción Pequeña",
        imagen: "./AventuraJS/objects/Pocion.png",
        precio: 200,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.CONSUMIBLE,
        bonus: 20
    },
    {
        nombre: "Poción Mediana",
        imagen: "./AventuraJS/objects/Pocion.png",
        precio: 600,
        rareza: RAREZAS.RARA,
        tipo: TIPOS.CONSUMIBLE,
        bonus: 40
    },
    {
        nombre: "Poción Grande",
        imagen: "./AventuraJS/objects/Pocion.png",
        precio: 1100,
        rareza: RAREZAS.EPICA,
        tipo: TIPOS.CONSUMIBLE,
        bonus: 60
    }
];

// ENEMIGOS
export const ENEMIGOS = [
    {
        nombre: "Hacker Novato",
        avatar: "./AventuraJS/characters/Enemigo_1.png",
        nivelAtaque: 15,
        vida: 80
    },
    {
        nombre: "Script Kiddie",
        avatar: "./AventuraJS/characters/Enemigo_2.png",
        nivelAtaque: 20,
        vida: 100
    },
    {
        nombre: "Programador Malicioso",
        avatar: "./AventuraJS/characters/Enemigo_3.png",
        nivelAtaque: 30,
        vida: 120
    },
    {
        nombre: "Cyber Criminal",
        avatar: "./AventuraJS/characters/Enemigo_4.png",
        nivelAtaque: 40,
        vida: 150
    }
];

// JEFES
export const JEFES = [
    {
        nombre: "El Bug Final",
        avatar: "./AventuraJS/characters/Jefe_1.png",
        nivelAtaque: 50,
        vida: 200,
        multiplicador: 1.5
    }
];