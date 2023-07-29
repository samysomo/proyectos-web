//POO

const perro = {
    nombre : "Napo",
    raza : "Labrador"
}

//Constructor

function Perro(nombre, raza){ //Forma de hacerlo sin clases
    this.nombre = nombre
    this.raza = raza
}

const perro1 = new Perro("Santino", "Bulldog");
console.log(perro1);

//Prototypes funciones que solo sirven para un tipo de objetos
Perro.prototype.ladrar = function(){
    return `${this.Perro} hace guau guau`
}

//CLASES

class Mascota{
    constructor(nombre, peso){
        this.nombre = nombre
        this.peso = peso
    }

    comer(){
        console.log(`${this.nombre} come`)
    }

    obtenerNombre(){
        return this.nombre;
    }
}

class Gato extends Mascota{
    constructor(nombre, peso, color){
        super(nombre, peso)
        this.color = color
    }

    maullar() {
        console.log(`${this.nombre} dice miau`)
    }

    obtenerColor(){
        return this.color;
    }
}

const gato1 = new Gato("Nicolas", "1kg" ,"Bicolor");
console.log(gato1)
gato1.maullar();
gato1.comer();
console.log(gato1.obtenerNombre())
