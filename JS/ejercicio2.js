// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.

// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generacion”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Personas {
  constructor(nombre, edad, dni, sexo, peso, altura, añoDeNacimiento) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.dni = dni),
      (this.sexo = sexo),
      (this.peso = peso),
      (this.altura = altura),
      (this.aNacimiento = añoDeNacimiento);
  }
  mostrarDatos() {
    document.write(`<br>Nombre: ${this.nombre}<br>
        Edad: ${this.edad}<br>
        DNI: ${this.dni}<br>
        Sexo: ${this.sexo}<br>
        Peso: ${this.peso}<br>
        Altura: ${this.altura}<br>
        Año de nacimiento: ${this.aNacimiento}<br>`);
  }
}

function mostrarGeneracion(agregarPersonas) {
  let año = agregarPersonas[0].aNacimiento;
  let nomb = agregarPersonas[0].nombre;
  if (año <= 1948) {
    alert(`${nomb} pertenece a la generacion Silent Generation(Los niños de la posguerra)<br>
        Rango caracteristco: Austeridad`);
  } else if (añoNacimiento >= 1949 && añoNacimiento <= 1968) {
    alert(`${nomb} pertenece a la generacion Baby Boom<br>
        Rango caracteristco: Ambición`);
  } else if (añoNacimiento >= 1969 && añoNacimiento <= 1980) {
    alert(`${nomb} pertenece a la generacion X<br>
        Rango caracteristco: Obsesión por el exito`);
  } else if (añoNacimiento >= 1981 && añoNacimiento <= 1993) {
    alert(`${nomb} pertenece a la generacion Y (millennials)<br>
        Rango caracteristco: Frustación`);
  } else {
    alert(`${nomb} pertenece a la generacion Z<br>
        Rango caracteristco: Irreverencia`);
  }
}

function esMayorDeEdad(agregarPersonas) {
  let edad = agregarPersonas[0].edad;
  let nomb = agregarPersonas[0].nombre;
  if (edad >= 18) {
    alert(`${nomb} es mayor de edad`);
  } else {
    alert(`${nomb} es menor de edad`);
  }
}

let agregarPersonas = [];

/********* Validaciones *********/

function validarCampoRequerido(input) {
  if (input.value.trim() != "") {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarEdad(input) {
  let patron = /^[0-9]{1,2}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarDni(input) {
  let patron = /^[0-9]{6,8}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarSexo(input) {
  let patron = /^[H, h, M, m]{1,1}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarPesoAltura(input) {
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarAñoNacimiento(input) {
  let patron = /^[0-9]{4,4}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

let nombreCompleto = document.querySelector("#nombreCompleto");
let edadPersona = document.querySelector("#edad");
let dniPersona = document.querySelector("#dni");
let sexoPersona = document.querySelector("#sexo");
let pesoPersona = document.querySelector("#peso");
let alturaPersona = document.querySelector("#altura");
let añoNacimientoPersona = document.querySelector("#añoNacimiento");
let botonGuardar = document.querySelector("#guardarDatos");
let botonMostrarGeneracion = document.querySelector("#mostrarGeneracion");
let botonMayorDeEdad = document.querySelector("#mayorDeEdad");
let listarPersonas = document.querySelector("#acordion");

nombreCompleto.addEventListener("blur", () => {
  validarCampoRequerido(nombreCompleto);
});
edadPersona.addEventListener("blur", () => {
  validarEdad(edadPersona);
});
dniPersona.addEventListener("blur", () => {
  validarDni(dniPersona);
});
sexoPersona.addEventListener("blur", () => {
  validarSexo(sexoPersona);
});
pesoPersona.addEventListener("blur", () => {
  validarPesoAltura(pesoPersona);
});
alturaPersona.addEventListener("blur", () => {
  validarPesoAltura(alturaPersona);
});
añoNacimientoPersona.addEventListener("blur", () => {
  validarAñoNacimiento(añoNacimientoPersona);
});

// ******** funcion guardar datos ******** //
botonGuardar.addEventListener("click", () => {
  persona = new Personas(
    nombreCompleto.value,
    edadPersona.value,
    dniPersona.value,
    sexoPersona.value,
    pesoPersona.value,
    alturaPersona.value,
    añoNacimientoPersona.value
  );
  agregarPersonas.push(persona);
  localStorage.setItem("persona", JSON.stringify(agregarPersonas));
});

// ******** utiliza funcion ver Generacion ******** //
botonMostrarGeneracion.addEventListener("click", () => {
  mostrarGeneracion(agregarPersonas);
});

// ******** utiliza funcion ver si es Mayor de edad ******** //
botonMayorDeEdad.addEventListener("click", () => {
  esMayorDeEdad(agregarPersonas);
});

// ******** funcion Crear Lista ********

let crearLista = (agregarPersonas) => {
  let contendedor = document.createElement("div");
  let accordionPersona = `
    <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ${agregarPersonas.nombre}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Nombre Completo: ${agregarPersonas.nombre}
                    </li>
                    <li class="list-group-item">
                      Edad: ${agregarPersonas.edad}
                    </li>
                    <li class="list-group-item">DNI: ${agregarPersonas.dni}</li>
                    <li class="list-group-item">
                      Sexo: ${agregarPersonas.sexo}
                    </li>
                    <li class="list-group-item">
                      Peso: ${agregarPersonas.peso}
                    </li>
                    <li class="list-group-item">
                      Altura: ${agregarPersonas.altura}
                    </li>
                    <li class="list-group-item">
                      Año de Nacimiento: ${agregarPersonas.aNacimiento}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  contendedor.innerHTML = accordionPersona;
  listarPersonas.appendChild(contendedor);
};

// ******** Mostrar datos por pantalla ******** //
let cargaInicial = () => {
  agregarPersonas = JSON.parse(localStorage.getItem("persona")) || [];

  if (agregarPersonas.length > 0) {
    agregarPersonas.forEach((agregarPersonas) => {
      crearLista(agregarPersonas);
    });
  }
};


cargaInicial();
