var miPerro = {
    "nombre" : "Gino",
    "edad" : 5,
    "peso" : 6,
    "raza" : "Beagle",
    "Numero de dientes" : 100
};

console.log(miPerro.nombre); //Acceder a las propiedades, muestra el nombre
console.log(miPerro.peso);
console.log(miPerro["Numero de dientes"]); //Si hay un nombre de propiedad con espacios se puede hacer así, es lo mismo que con el punto


//USANDO VARIABLES PARA ACCEDER

var resultados = {
    1: "nora245",
    2: "gino302",
    3: "estef545",
    4: "kiara123",
}

var posición = 4;
console.log(resultados[posición]); //Se puede acceder a las propiedades usando una variable 

// PARA CAMBIAR LOS VALORES DE LAS PROPIEDADES

var mochila = {
    "color" : "azul",
    "tamaño" : "mediano",
    "contenido" : ["botella de agua", "cuaderno"]
};

console.log(mochila.color); //Azul
mochila.color = "verde"; //Cambiamos la propiedad
console.log(mochila.color); //verde

console.log(mochila.contenido);
mochila.contenido.push("Lápiz"); //Agregamos el elemento a la "mochila"
console.log(mochila.contenido);

mochila.contenido = []; //Agregamos un nuevo arreglo completamente

//AGREGAR UNA NUEVA PROPIEDAD

var curso = {
    "titulo" : "Aprende JS desde cero",
    "idioma" : "Español",
    "duración" : 30
};
                      //SI INTENTAS ACCEDER A UNA PROPIEDAD QUE NO EXISTE TE DA UNDEFINED
curso.vistas = 34500; //AGREGAMOS LA NUEVA PROPIEDAD .VISTAS Y LE ASIGNAMOS EL VALOR
                      //curso["vistas"]=34500; //USANDO CORCHETES, lo mismo que con punto.
console.log(curso.vistas);


//ELIMINAR UNA PROPIEDAD

delete curso.duración;  //Se borra la propiedad duración del objeto curso
console.log(curso.duración); //undefined, se borró
console.log(curso); //Duración ya no existe, no se muestra

//VERIFICAR SI TIENE UNA PROPIEDAD

var miCuaderno = {
    "color" : "verde" ,
    "categoria" : 3,
    "precio" : 4.56
};

console.log(miCuaderno.hasOwnProperty("color")); //Tiene esta propiedad? = hasOwnProperty regresa un TRUE
console.log(miCuaderno.hasOwnProperty("Tuki")); //FALSE , NO LA TIENE
                                                //Esta propiedad es mi util si se usa en un condicional, por ejemplo

function verificarPorpiedad(obj, propiedad){
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "No tiene esta propiedad";
    }
}

console.log(verificarPorpiedad(miCuaderno, "color"));
console.log(verificarPorpiedad(miCuaderno, "tuki"));