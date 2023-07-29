
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve("Usuario Autenticado"); //El promise se cumple
    }else{
        reject("No se pudo iniciar sesión"); //El promise no se cumple
    }
});

console.log(usuarioAutenticado)

//Tres estados de los promises
//Pending - en espera
//Fullfilled - aceptado
//Rejected - rechazado

usuarioAutenticado
    .then( (resultado) => console.log(resultado))
    .catch( (error) => console.log(error))

//Notification API
let boton = document.querySelector("#boton");
function verNotificacion(){
    Notification.requestPermission() //Esta es una promise
        .then( (resultado) => console.log(resultado))

    if(Notification.permission == "granted"){
        new Notification("Esta es una notificacion",{
            icon : "img/nirNot.png",
            body : "Prueba de notificacion"
        })
    }
}