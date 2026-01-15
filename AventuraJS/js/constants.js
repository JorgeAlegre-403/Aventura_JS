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
        imagen: "./AventuraJS/images/objects/Dagger.png",
        precio: 80,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMA,
        bonus: 10
    },
    {
        nombre: "Cuchilla",
        imagen: "./AventuraJS/images/objects/Cuchilla.png",
        precio: 100,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMA,
        bonus: 15
    },
    {
        nombre: "Pistola",
        imagen: "./AventuraJS/images/objects/Pistola.png",
        precio: 150,
        rareza: RAREZAS.RARA,
        tipo: TIPOS.ARMA,
        bonus: 25
    },
    {
        nombre: "Katana",
        imagen: "./AventuraJS/images/objects/Katana.png",
        precio: 200,
        rareza: RAREZAS.EPICA,
        tipo: TIPOS.ARMA,
        bonus: 35
    },

    // ARMADURAS
    {
        nombre: "Armadura Ligera",
        imagen: "./AventuraJS/images/objects/Armadura.png",
        precio: 60,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 8
    },
    {
        nombre: "Robot Ayudante",
        imagen: "./AventuraJS/images/objects/robot_ayudante.png",
        precio: 90,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 12
    },
    {
        nombre: "Brazo mecanico",
        imagen: "./AventuraJS/images/objects/Brazo_mecanico.png",
        precio: 85,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 10
    },
    {
        nombre: "Escudo",
        imagen: "./AventuraJS/images/objects/escudo.png",
        precio: 75,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 10
    },
    {
        nombre: "Gafas",
        imagen: "./AventuraJS/images/objects/gafas-cyberpunk.png",
        precio: 70,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.ARMADURA,
        bonus: 10
    },

    // CONSUMIBLES
    {
        nombre: "Poción Pequeña",
        imagen: "./AventuraJS/images/objects/Pocion.png",
        precio: 50,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.CONSUMIBLE,
        bonus: 20
    },
    {
        nombre: "Energitica",
        imagen: "./AventuraJS/images/objects/Energetica.png",
        precio: 50,
        rareza: RAREZAS.COMUN,
        tipo: TIPOS.CONSUMIBLE,
        bonus: 20
    }
];

// ENEMIGOS
export const ENEMIGOS = [
    {
        nombre: "Kiddie",
        avatar: "./AventuraJS/images/enemies/Enemy_2.png",
        nivelAtaque: 20,
        vida: 100
    },
    {
        nombre: "Madisson",
        avatar: "./AventuraJS/images/enemies/Enemy_3.png",
        nivelAtaque: 30,
        vida: 120
    },
    {
        nombre: "Josefina",
        avatar: "./AventuraJS/images/enemies/Enemy_4.png",
        nivelAtaque: 40,
        vida: 150
    }
];

// JEFES
export const JEFES = [
    {
        nombre: "Adam Smasher",
        avatar: "./AventuraJS/images/enemies/Boss.png",
        nivelAtaque: 50,
        vida: 200,
        multiplicador: 1.5
    }
];