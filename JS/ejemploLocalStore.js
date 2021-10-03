// colocar metodo para guardar en LocalStorage
// tareas: es el array creado
// text: es la variable creada para traer los datos del input

const addItemList  = (e) => {
    e.preventDefault();
    let texto = document.querySelector("#textTarea").value;
    tareas.push(text);
    localStorage.setItem('tareas', JSON.stringify(tareas)) //stringify transforma array o objeto a JSON
    crearLista(texto);
}


// carga inicial

const cargaInicial = () => {
    tareas = JSON.parse(localStorage.getItem('tareas')) || [] //parse transforma todo en formato array

    if(tareas-length>0){
        tareas.forEach(tarea => {
            crearLista(tarea)
        });
    }

    document.querySelector(#textTarea).focus()
} 