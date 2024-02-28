//* Maquina *//

alert("Bienvenid@ al juego de Piedra, Papel & Tijera | \n¡Pondremos a prueba tu destreza! ");
let nombre = prompt("Ingresa tu nombre para empezar");

function JuegoPiedraPepelTijeras() {
    let aleatorio = Math.floor(Math.random() * 100) / 100;
    let jugadorPc;

    //**/ Decision de la maquina*/
    if (aleatorio < 0.3) {
        jugadorPc = ("Piedra");
    } else if (aleatorio < 0.6) {
        jugadorPc = ("Papel");
    } else {
        jugadorPc = ("Tijeras");
    }

    //**/ Juego / */
    let Jugador1 = prompt("Hola " + nombre + " \n¿Estas preparado? " + " \n \nEstas son las opciones que puedes ejegir: Piedra | Papel | Tijeras ¡Ingresa tu jugada!");

    //** Batalla **//
    if (Jugador1 === "Piedra" && jugadorPc === "Tijeras") {
        alert("HAZ GANADO TU CONTRINCANTE HA ELIGIDO..." + jugadorPc);
    } else if (Jugador1 === "Papel" && jugadorPc === "Piedra") {
        alert("HAZ GANADO TU CONTRINCANTE HA ELIGIDO..." + jugadorPc);
    } else if (Jugador1 === "Tijeras" && jugadorPc === "Papel") {
        alert("HAZ GANADO TU CONTRINCANTE HA ELIGIDO..." + jugadorPc);
    } else if (Jugador1 == jugadorPc) {
        alert("HAZ EMPATADO TU CONTRINCANTE HA ELIGIDO..." + jugadorPc);
    } else {
        alert("HAZ PERDIDO TU CONTRINCANTE HA ELIGIDO..." + jugadorPc);
    }
}
JuegoPiedraPepelTijeras();

/**Ciclo para juego nuevo */
let jugarDeNuevo = true
let intentos = 0
while (jugarDeNuevo) {
    let Jugador1 = prompt("¿Deseas volver a Jugar?" + " \n Escribe 'Jugar' si deseas continuar en el juego. " + "\n Escribe 'Salir' para terminar el juego");
    if (Jugador1 === "Salir") {
        jugarDeNuevo = false;
        alert("El juego ha terminado, gracias por jugar" + " \n Total de intentos " + intentos);
    } else if (Jugador1 !== "Jugar") {
        alert("Opcion no validad.");
    } else {
        intentos++;
        JuegoPiedraPepelTijeras(Jugador1);
    }
}