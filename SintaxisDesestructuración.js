const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

//const nombre = usuario.nombre;
//const edad = usuario.edad;

const {nombre, edad} = usuario; //Busca si hay una propiedad con esos nombres y asigna los valores
// {Son las variables que tienen el mismo nombre que las propiedades}
var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

// var x = coordenadas.x;
// var y = coordenadas.y;
// var z = coordenadas.z;

const {x,y,z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);

//DESESTRUCTURAR DE OTRA FORMA (OBJETOS ANIDADOS)

const tuki = {
    johnDoe: {
        edad1: 27,
        correo: "tuki@gmail.com"
    }
};

const {johnDoe: {edad1, correo}} = tuki;

console.log(edad1 + " " + correo);

//PUEDE SER CON VARIABLES NUEVAS

const {johnDoe: {edad1: edadUsuario, correo: correoUsuario}} = tuki;

console.log(edadUsuario + " " + correoUsuario);


//OTRO EJEMPLITO

const PRONOSTICO_LOCAL = {
    "ayer": {
        "minima": 61,
        "maxima": 75
    },
    "hoy":{
        "minima": 61,
        "maxima": 77
    },
    "mañana": {
        "minima": 68,
        "maxima": 80
    }
};

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy, maximaHoy); //las muestra con un espacio


//TAMBIÉN FUNCIONA CON ARREGLOS

var a;
var b;
var c;
var d;

[a, b, c] = [1, 2, 3]; //ASÍ SE ASIGNAN A LAS VARIABLES
[a, b,,, d] = [1,2,3,4,5,6]; //SÓLO SE ASIGNAN LOS DOS PRIMEROS
                             // los espacios omiten los valores, d se le asignara el valor 5
console.log(a, b, c, d);

//CAMBIAR LOS VALORES DE DOS VARIABLES

var a = 8;
var b = 6;

[b, a] = [a, b]; //cambiamos los valores

console.log("a:" + a + " b:" + b);


//DESESTRUCTURACIÓN CON OPERADOR REST ...

var a;
var b;
var arr;
[a, b, ...arr] = [1, 2, 3, 4, 5, 6 ,7]; //los elementos a partir de 2 se asignan a un nuevo arreglo

console.log(a, b);
console.log(arr);

//Ejemplo remover los 3 primeros elementos

const arregloInicial = [1, 2, 3, 4, 5, 6, 7];

function removerTresPrimerosElementos(arreglo) {
    const [,,, ...nuevoArreglo]= arreglo;   //ELIMINAMOS LOS 3 PRIMEROS EJEMPLOS
    return nuevoArreglo;
}

console.log(removerTresPrimerosElementos(arregloInicial));


//SintaxisDesestructuración pasar objeto como argumento

var nuevoPerfilCliente = {
    nombre: "Jane",
    edad: 24,
    nacionalidad: "española",
    ubicacion: "españa"
};

const actualizarPerfil = (informacionDePerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
    console.log(nombre, edad, nacionalidad, ubicacion);
};

actualizarPerfil(nuevoPerfilCliente);

// SE PUEDE HACER DE OTRA MANERA

const actualizarPerfil2 = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre, edad, nacionalidad, ubicacion);
}


actualizarPerfil2(nuevoPerfilCliente);

//otro ejemplito

const estadisticas = {
    "max": 56.78,
    "desviacionEstandar": 4.34,
    "mediana": 34.65,
    "moda" : 23.87,
    min: -0.75,
    promedio: 35.85
};

const puntoMedio = ({max, min}) => (max + min) / 2.0;

console.log(puntoMedio(estadisticas));