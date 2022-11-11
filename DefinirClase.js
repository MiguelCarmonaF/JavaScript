//UNA CLASE ES ALGO QUE PERMITE CREAR MUCHOS OBJETOS CON LA MISMA ESTRUCTURA
//MISMA PROPIEDADES Y FUNCIONALIDAD, MUCHOS OBJETOS

class TransbordadorEspacial {
    constructor(planeta){ //Funcion que se llama automaticamente cuando se crea un objeto
        this.planeta = planeta; //this.planeta es la propiedad
    }
}

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota ("Nora", 5);

console.log(miMascota);