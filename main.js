"use strict";

// Elementos con los q voya W
// Funciones
// Funcion del listener
//    Pinte la carilla del select
//    Generre un numero random
//    Si es par pone un fondo
//    Si es impar otro
// Listener del botón

const update = document.querySelector('.update');

function print() {

    // Lo meto dentro de la función pq cada vez q se me la ejecute quiero q me coja los datos nuevos. Si lo dejo fuera, coge los q tiene al cargar la página.

    const face = document.querySelector('.carilla');
    const idAnimo = document.querySelector("#animo").value;
    const option1 = document.querySelector('.option1').value;
    const option2 = document.querySelector('.option2').value;

    // console.log(`hola ${idAnimo}, ${option1}, ${option2}`);

    if (idAnimo === option1) {
        face.innerHTML = option1;
    } else {
        face.innerHTML = option2;
    }
}

update.addEventListener('click', print);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const win = document.querySelector("HTML");

function random() {

    const number = getRandomInt(100);
    
    // console.log(`${number}`);

    if (number % 2 === 0) {
        win.classList.add("amarillo");
        win.classList.remove("naranja");
    } else {
        win.classList.add("naranja");
        win.classList.remove("amarillo");
    }
}

update.addEventListener('click', random);