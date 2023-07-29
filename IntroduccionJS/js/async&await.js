function descargarNuevosClientes(){
    return new Promise((resolve) => {
        console.log("Descargando clientes...")

        setTimeout( () => { //Solo se ejecuta una vez, setInterval varias veces
            resolve("Los clientes fueron descargados");
        }, 5000);
    });
}

function descargarNuevosPedidos(){
    return new Promise((resolve) => {
        console.log("Descargando pedidos...")

        setTimeout( () => { //Solo se ejecuta una vez, setInterval varias veces
            resolve("Los pedidos fueron descargados");
        }, 3000);
    });
}

async function app(){ //Esta funcion se ejecuta sin bloquear el resto del codigo
    try {
        //const resultado = await descargarNuevosClientes(); 
        //console.log(resultado)
        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error)
    }
}

app();
