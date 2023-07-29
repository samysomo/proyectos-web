function obtenerEmpleados(){
    const archivo = "empleados.json";

    fetch(archivo) //Promise
        .then((resultado) => resultado.json())
        .then((datos) =>{
            // console.log(datos.empleados);
            const {empleados} = datos;
            for(let empleado of empleados){
                console.log(empleado)
            }
        })
}

async function obtenerEmpleados2(){
    const archivo = "empleados.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();

    const {empleados} = datos;
    for(let empleado of empleados){
        console.log(empleado)
    }
}
obtenerEmpleados2();