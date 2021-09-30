// ***** Números mágicos *****

// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico. Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let numero;
let botonPulsado = 'btn btn-danger fs-2 text-danger shadow p-3 mb-5 bg-body rounded'

function numeroAleatorio(){
    numero = (Math.floor((Math.random() * (11))));
    let boton = document.querySelector("#boton");
    boton.className = botonPulsado;
    boton.innerHTML = 'Adivina el numero xD';
    console.log(boton);
    console.log(numero);
}

function validarNumero(){
    let numAdivinado = document.querySelector("#adivinarNumeroRandom")
    .value;
    // console.log(numAdivinado);
    // console.log(parseInt(casillero.innerHTML));
    if(parseInt(numAdivinado) === numero){
        alert('Numero adivinado')
        location.reload();
    } else if(parseInt(numAdivinado) > numero) {
        alert('El numero ingresado es Mayor')
    } else {
        alert('El numero ingresado es Menor')
    }
}

