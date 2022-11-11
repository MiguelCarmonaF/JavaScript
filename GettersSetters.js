//Los objetos pueden tener funciones, las funciones se pueden definir en una clase
//Para cuando se cree un objeto tenga esas funciones
//get y set son funciones que protegen la data de ese objeto

class Libro {
    constructor (autor){
        this._autor = autor; //Podemos cambiar el valor de autor EL _ BAJO INDICA QUE NO SE DEBE CAMBIAR ( PERO COMO TAL NO LO PROTEGE)
    }

    get autor(){
        return this._autor; //Retornamos el valor
    } //Getters son metodos que permiten obtener el valor con una propiedad privada

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    } //Nos permite actualizar el valor de una propiedad
}

const libro = new Libro("anonimo");
console.log(libro.autor); //mandamos llamar el getter

libro.autor = "Gino Smith";
console.log(libro.autor);