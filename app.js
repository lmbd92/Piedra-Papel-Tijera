"use strict";

//Capturando elementos del DOM para las opciones piedra, papel o tijera
let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

//Capturando elementos del DOM para el tablero de opciones elegidas por el usuario
let manoUsuario = document.querySelector(".mano-usuaria");
let manoCompu = document.querySelector(".mano-computadora");

let puntajeUsuario = document.querySelector(".puntaje-usuaria p");
let puntajeComputadora = document.querySelector(".puntaje-computadora p");

let labelResultado = document.querySelector(".resultado");

let eleccionUsuario = "";
let eleccionCompu = "";

let contUsuario = 0;
let contCompu = 0;

// esta función no se ejecuta automaticamente, es decir, tengo que invocarla en otro punto del código
const eleccionComputadora = () => {
  let opcionAlAzar = Math.floor(Math.random() * 3);

  //Opción para piedra
  if (opcionAlAzar == 0) {
    manoCompu.src = "./assets/piedra_computadora.png";
    eleccionCompu = "piedra";
  } else if (opcionAlAzar == 1) {
    //Opción para papel
    manoCompu.src = "./assets/papel_computadora.png";
    eleccionCompu = "papel";
  } else {
    //Opción para tijera
    manoCompu.src = "./assets/tijera_computadora.png";
    eleccionCompu = "tijera";
  }
};

const resultado = () => {
  if (eleccionUsuario == "piedra") {
    if (eleccionCompu == "piedra") {
      labelResultado.textContent = "Empate!!";
    }
    if (eleccionCompu == "papel") {
      labelResultado.textContent = "Perdiste!! :'(";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
    }
    if (eleccionCompu == "tijera") {
      labelResultado.textContent = "Ganasteee!! :D";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
    }
  }

  if (eleccionUsuario == "papel") {
    if (eleccionCompu == "piedra") {
      labelResultado.textContent = "Ganasteee!!";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
    }
    if (eleccionCompu == "papel") {
      labelResultado.textContent = "Empate!! :'(";
    }
    if (eleccionCompu == "tijera") {
      labelResultado.textContent = "Perdiste!! :D";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
    }
  }

  if (eleccionUsuario == "tijera") {
    if (eleccionCompu == "piedra") {
      labelResultado.textContent = "Perdiste!!";
      contCompu++;
      puntajeComputadora.textContent = contCompu;
    }
    if (eleccionCompu == "papel") {
      labelResultado.textContent = "Ganasteee!! :'(";
      contUsuario++;
      puntajeUsuario.textContent = contUsuario;
    }
    if (eleccionCompu == "tijera") {
      labelResultado.textContent = "Empate!! :D";
    }
  }
};

// esta función se ejecuta automaticamente, es decir, no tengo que invocarla en otro punto del código
botonPiedra.onclick = () => {
  eleccionUsuario = "piedra";
  manoUsuario.src = "./assets/piedra_ada.png";
  eleccionComputadora();
  resultado();
};

botonPapel.onclick = () => {
  eleccionUsuario = "papel";
  manoUsuario.src = "./assets/papel_ada.png";
  eleccionComputadora();
  resultado();
};

botonTijera.onclick = () => {
  eleccionUsuario = "tijera";
  manoUsuario.src = "./assets/tijera_ada.png";
  eleccionComputadora();
  resultado();
};
