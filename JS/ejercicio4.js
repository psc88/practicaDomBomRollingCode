// funcion inicial de arranque
onload = iniciar();
function iniciar() {
  let cronometroIniciar = document.querySelector("#botonInicar");
  let cronometroParar = document.querySelector("#botonParar");
  let cronometroReiniciar = document.querySelector("#botonReiniciar");
  cronometroIniciar.addEventListener("click", cronometrar);
  cronometroParar.addEventListener("click", pararCronometro);
  cronometroReiniciar.addEventListener("click", reiniciarCronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
}

// funcion para cronometrar el tiempo y sacar el evento click
function cronometrar() {
  let boton = document.querySelector("#botonInicar");
  obtenerTiempo();
  id = setInterval(obtenerTiempo, 1000);
  document
    .querySelector("#botonInicar")
    .removeEventListener("click", cronometrar);
}

// funcion que se repite cada segundo 
function obtenerTiempo() {
  let horasAuxiliar, minutosAuxiliar, segundosAuxiliar;
  segundos++;

  if (segundos > 59) {
    minutos++;
    segundos = 0;
  }
  if (minutos > 59) {
    horas++;
    minutos = 0;
  }
  if (horas > 24) {
    horas = 0;
  }

  if (segundos < 10) {
    segundosAuxiliar = "0" + segundos;
  } else {
    segundosAuxiliar = segundos;
  }
  if (minutos < 10) {
    minutosAuxiliar = "0" + minutos;
  } else {
    minutosAuxiliar = minutos;
  }
  if (horas < 10) {
    horasAuxiliar = "0" + horas;
  } else {
    horasAuxiliar = horas;
  }

  let cronometro = document.querySelector("#cronometro");

  cronometro.innerHTML = `${horasAuxiliar}:${minutosAuxiliar}:${segundosAuxiliar}`;
}

// funcion para parar el cronometro
function pararCronometro() {
  clearInterval(id);
  document.querySelector("#botonInicar").addEventListener("click", cronometrar);
}

//funcion para reiniciar el cronometro
function reiniciarCronometro() {
  clearInterval(id);
  document.querySelector("#cronometro").innerHTML = "00:00:00";
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.querySelector("#botonInicar").addEventListener("click", cronometrar);
}
