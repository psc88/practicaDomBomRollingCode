function obtenerFecha() {
    // obtener fecha y hora actual
  
    let fecha = new Date();
    // console.log(fecha.getDate()); // numeros del dia del mes
    // console.log(fecha.getDay()); // 0 - 6 indica los dias de la semana
    // console.log(fecha.getMonth()); // 0 - 11 indica los meses
    // console.log(fecha.getFullYear()); // indica el año
    // console.log(fecha.getHours()); // indica la hora
    // console.log(fecha.getMinutes()); // indica los minutos
    // console.log(fecha.getSeconds()); // indica los segundos
  
    let diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  
    let parrafoFecha = document.querySelector("#fecha");
    parrafoFecha.innerHTML = `${
      diasSemana[fecha.getDay()]
    } ${fecha.getDate()} de ${
      meses[fecha.getMonth()]
    } del ${fecha.getFullYear()}`;
  
    let parrafoHora = document.querySelector("#hora");
    
    // agregar 0 cuando los numeros son menores a 10
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
  
    if(segundos < 10){
      segundos = '0'+ segundos;
    }
  
    if(minutos < 10){
      minutos = '0' + minutos;
    }
  
    if(horas < 10){
      horas = '0' + horas;
    }
    
    parrafoHora.innerHTML = `${horas}:${minutos}:${segundos}`;
  }
  setInterval(obtenerFecha, 1000);
  
  function cambiarColor(color){
    let contenedor = document.querySelector('#contenedorPrincipal');
    contenedor.className = color;
  
    // switch(color){
    //   case 'rosa':
    //     contenedor.className = 'rosa';
    //     break;
    //   case 'azul':
    //     contenedor.className= 'azul';
    //     break;
    // }
  }