// "use strict"; Marcar más errores

//Variables

let variable_uno = "hola"; //underscore
let variablrUno; //cammelcase
let VariableUno; //Pascal Case

console.log(typeof variable_uno); //ver el tipo de dato de una variable
console.log(variable_uno.includes("o")); //Saber si un string se encuentra dentro de otro y en que indice
try { //Solo usar en situaciones que lo requieran
    console.log(variable_dos)
} catch (error) {
    console.log(error)
}
console.log(variable_uno.includes("d")); //Saber si un string se encuentra dentro de otro. funciona para arreglos tambien

//String literals
console.log(`hola ${variable_uno}`);


