const persona = {
    nombre: "Isabel",
    presentarse: function(){ //ESTO SE DENOMIANA METODO
        return `Hola, mi nombre es ${this.nombre}`; //This busca la propiedad en este objeto
    }
};

console.log(persona.presentarse());

//DE OTRA MANERA

const persona2 ={
    nombre: "Juan",
    presentarse(){
        return `Hola, mi nombre es ${this.nombre}`; //This busca la propiedad en este objeto
    }
};

console.log(persona2.presentarse());