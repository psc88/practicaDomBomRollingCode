function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  // traer el elemento del html - opcion 1 con metodo querySelector
  // let titulo = document.querySelector('#tituloPrincipal');

  // traer el elemento del html - opcion 2 con metodo getElementBy---
  // getElementById('un id de html')
  // getElementByClassName('una clase de html')
  // getElementByTagName('una etiqueta de html')

  let titulo = document.getElementById("tituloPrincipal");
  console.log(titulo.className);
  titulo.className = "text-primary display-2";
}

function verMas() {
  let boton = document.getElementById("btnVerMas");
  // paso 1 - buscar el padre
  let articulos = document.getElementsByTagName("article");
  console.log(articulos[1]);

  if (boton.innerHTML === "Leer mas ...") {
    // paso 2 - crear el elemento <p>
    // // forma 1
    // let parrafo = document.createElement("p"); // <p></p>
    // // paso 3 - agregar datos al elemento creado
    // parrafo.innerHTML =
    //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dolores nulla accusantium voluptatibus, nisi possimus quam delectus ad culpa libero dolorem quis, corporis velit ex laudantium? Sit esse laborum voluptas.";
    // parrafo.className = "lead";
    // console.log(articulos[1].children[1]);
    // // paso 4 - unir el elemento padre con el nodo hijo
    // // articulos[1].appendChild(parrafo); // agregar nodos hijos al final
    // articulos[1].insertBefore(parrafo, articulos[1].children[2]);

    //forma 2
    articulos[1].innerHTML += '<p class= "lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, fugiat. Assumenda soluta fuga magnam excepturi eos magni dolore cum dicta. Ipsam non quam iusto dolor, dolores rerum, quidem pariatur, doloribus velit tempora quae. Fugiat saepe assumenda impedit nostrum voluptatum beatae quaerat laborum reiciendis voluptate facere ratione veritatis, corrupti odit iure?</p>';

    boton.innerHTML = "Ocultar";
    boton.className = "btn btn-outline-danger";
  } else {
    console.log(articulos[1].hasChildNodes()); //hasChildNodes pregunta si hay hijos
    if (articulos[1].hasChildNodes() && articulos[1].children.length > 2) {
      // borrar un nodo hijo
      articulos[1].removeChild(articulos[1].children[2]);
      boton.innerHTML = "Leer mas ...";
      boton.className = "btn btn-outline-primary";
    }
  }
}
