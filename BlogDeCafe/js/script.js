//querySelector
const heading = document.querySelector('.header__texto h2');
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll(".header__navegacion a"); //Lo selecciona como un arreglo
console.log(enlaces[0]);

//EVENTOS

window.onload = () =>{
    console.log("Evento Onload") //Ocurre depues porque tiene que cargar todos los archivos del que deoenden del HTML
}

window.addEventListener("DOMContentLoaded", () =>{ //La funcion que ocurre si se cumple el evento se le llama callback
    console.log("Evento DOMContentLoaded") //Ocurre primero porquee solo espera a que se cargue el html
})

//Seleccionar elemetos y asosciarlos a un evento
/*const botonEnviar = document.querySelector(".boton--primario");
botonEnviar.addEventListener("click", function(event){
    console.log(event);
    event.preventDefault();
})*/

//Para formularios
const nombre = document.querySelector("#contacto_nombre");
const email = document.querySelector("#contacto_email");
const mensaje = document.querySelector("#contacto_mensaje");
const formulario = document.querySelector(".formulario-contacto");

const datos = {
    "contacto_nombre" : "",
    "contacto_email" : "",
    "contacto_mensaje" : "",
}

nombre.addEventListener("input", leerTexto); //Leer el input en tiempo real, si no change
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//Submit
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    //Validar el formulario

    const { contacto_nombre, contacto_email, contacto_mensaje} = datos; //Deconstructing al objeto datos

    //Comprobar que los campos esten llenos para enviar o no el formulario
    if(contacto_nombre === "" || contacto_email === "" || contacto_mensaje === ""){
        validarFormulario("Todos los campos son obligatorios", false);
    }else{
        validarFormulario("Datos enviados correctamente", true);
    }
})

//Guardar los campos del formulario en el objeto datos
function leerTexto(evento){ 
    datos[evento.target.id] = evento.target.value;
}

//Crear la alerta segun si es valida o no
function validarFormulario(mensaje, estado){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(estado === false){
        alerta.classList.add("error")
    }else{
        alerta.classList.add("valido")
    }
    formulario.appendChild(alerta);

    //Desaparecer despues de 5 segundos
    setTimeout(() =>{
        alerta.remove();
    }, 5000);
}
