"use strict";

//Capturando elementos del DOM para las opciones piedra, papel o tijera
let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

//Capturando elementos del DOM para el tablero de opciones elegidas por el usuario
let manoUsuario = document.querySelector(".mano-usuaria");
let manoCompu = document.querySelector(".mano-computadora");

// esta función de código no se ejecuta automaticamente, es decir, tengo que invocarla en otro punto del código
const eleccionCompu = () => {
  let opcionAlAzar = Math.floor(Math.random() * 3);

  //Opción para piedra
  if (opcionAlAzar == 0) {
    manoCompu.src = "./assets/piedra_computadora.png";
  } else if (opcionAlAzar == 2) {
    //Opción para papel
    manoCompu.src = "./assets/papel_computadora.png";
  } else {
    //Opción para tijera
    manoCompu.src = "./assets/tijera_computadora.png";
  }
};

// esta función de código se ejecuta automaticamente, es decir, no tengo que invocarla en otro punto del código
botonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_ada.png";
  eleccionCompu();
};

botonPapel.onclick = () => {
  manoUsuario.src = "./assets/papel_ada.png";
  eleccionCompu();
};

botonTijera.onclick = () => {
  manoUsuario.src = "./assets/tijera_ada.png";
  eleccionCompu();
};
