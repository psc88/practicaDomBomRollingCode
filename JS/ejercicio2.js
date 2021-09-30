// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.

// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generacion”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona1 {
    constructor(nombre, edad, dni, sexo, peso, altura, añoDeNacimiento){
        this.nombre = nombre,
        this.edad = edad,
        this.dni = dni,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.aNacimiento = añoDeNacimiento
    }

    mostrarGeneracion(){
        let edad = this.edad;
        if(edad <=1948){
            alert(`${this.nombre} pertenece a la generacion Silent Generation(Los niños de la posguerra)<br>
            Rango caracteristco: Austeridad`);
        }else if(edad >= 1949 && edad <=1968) {
            alert(`${this.nombre} pertenece a la generacion Baby Boom<br>
            Rango caracteristco: Ambición`);
        }else if(edad >= 1969 && edad <=1980){
            alert(`${this.nombre} pertenece a la generacion X<br>
            Rango caracteristco: Obsesión por el exito`);
        }else if(edad >= 1981 && edad <=1993){
            alert(`${this.nombre} pertenece a la generacion Y (millennials)<br>
            Rango caracteristco: Frustación`);
        }else {
            alert(`${this.nombre} pertenece a la generacion Z<br>
            Rango caracteristco: Irreverencia`);
        }
    }
    esMayorDeEdad(){
        let edad = this.edad;
        if(edad>=18){
            alert(`${this.nombre} es mayor de edad`);
        } else {
            alert(`${this.nombre} es menor de edad`);
        }
    }
    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}<br>
        Edad: ${this.edad}<br>
        DNI: ${this.dni}<br>
        Sexo: ${this.sexo}<br>
        Peso: ${this.peso}<br>
        Altura: ${this.altura}<br>
        Año de nacimiento: ${this.aNacimiento}<br>`)
    }
}

let persona1;

function crearObjetoPersona(){
    let nombreCompleto = document.querySelector('#inputNombreCompleto').value;
    let edadPersona = document.querySelector('#inputEdad').value;
    let dniPersona = document.querySelector('#inputDni').value;
    // let sexo = document.querySelector('#inputEdad').value;
    let pesoPersona = document.querySelector('#inputPeso').value;
    let alturaPersona = document.querySelector('#inputAltura').value;
    let añoNacimientoPersona = document.querySelector('#inputAñoNacimiento').value;
    console.log(nombreCompleto);
    console.log(edadPersona);
    console.log(dniPersona);
    // console.log(sexo);
    console.log(pesoPersona);
    console.log(alturaPersona);
    console.log(añoNacimientoPersona);

    persona1 = new Persona1(nombreCompleto, edadPersona, dniPersona, 'sexo', pesoPersona, alturaPersona, añoNacimientoPersona)
}

function generacion(){
    persona1.mostrarGeneracion();
}

function mayorDeEdad(){
    persona1.esMayorDeEdad();
}
