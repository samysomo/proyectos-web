//OBJETOS
const objeto = {
    nombre : "silla",
    precio : 400
}

const objeto2 = {
    peso: "1kg",
    altura: "50cm"
}

const objeto3 = {
    nombre : "Nirvana",
    apellido : "Gonzalez",
    bailar : function(){ //Debe ser con function porque arrow function hace referencia al window
        console.log(`${this.nombre} baila`) 
    }
}

//Destructuring
const {precio, nombre} = objeto;

//Evitar cambios a un objeto, .seal si permitira modificar las ya existentes
Object.freeze(objeto);
Object.isFrozen(objeto); //Saber si un objeto esta congelado

//Unir dos objetos con el spread operator
const nuevoObjeto = {...objeto, ...objeto2};

//Arreglos
let arr = [1,2,3,4,5,"3"];

//visualizar el contenido de un arreglo en una tabla en la consola
console.table(arr);

for(let num of arr){
    console.log(num);
}

//eliminar elementos de un arreglo a eleccion
arr.splice(2, 1); //primer malor es posicion, segundo cantidad de elementos a eliminar

//Agregar objetos a un arreglo sin cambiar el original
const newArr = [...arr, 6]; //Para agragarlo al inicio se invierte la posicion de los elementos
console.log(newArr);

//Buscar en arrelgos de objetos
const arr2 = [
    {nombre : "Nirvana", edad : 19},
    {nombre : "Samuel", edad : 20}
]

let resultado = arr2.some(persona => persona.nombre === "Nirvana");
console.log(resultado);

//Operar con valores que pertenecen a propiedades de objetos dentro de un arreglo de objetos
let sumaEdades = arr2.reduce((total, persona) => total + persona.edad, 0); 
console.log(sumaEdades);

//Filtrar segun alguna condicion
let filtro = arr2.filter(persona => persona.edad < 20);
console.log(filtro);

//MAP - Crea un nuevo arreglo con lo que obtiene, for each no
const nuevoArr2 = arr2.map(persona => persona.nombre);
console.table(nuevoArr2);

const arr3 = [];
for(let personas of arr2){
    arr3.push(personas.nombre);
}

console.table(arr3);