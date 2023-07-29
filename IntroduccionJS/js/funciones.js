//FUNCIONES

//Formas de declarar una función
function sumar(a = 0, b = 0){ //Con aurgumentos por default
    console.log(a + b);
}

//Expresión de la funcion
let sumar2 = function(a, b){
    console.log(a + b);
}

//Arrow function
let sumar3 = (a,b) => console.log(a + b);

sumar(1,3);
sumar2(1,3);
sumar3(1,3);

//HOISTING - Javascript corre en 2 vueltas, etapa de creacion en la se registran funciones y variables, y de ejecucion, en la que se ejecuta el codigo

//IIFE - Se mandan llamar a ellas mismas, se suelen usar para proteger variables, que no se puedan usar en otros archivos
(function(){
    console.log("Hola");
})();