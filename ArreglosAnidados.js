var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "árboles",
        lista: [           //Arreglanos anidados, este arreglo forma parte de un objeto que forma parte de un arreglo
            "abeto",
            "pino",
            "abedul",
        ]
    }
];

//Para acceder a rosas:

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var primerArbol = misPlantas[1].lista[1]; //Accedemos a pino, 2do en el indice listas, que a su vez es el 1ero del otro arreglo.
console.log(primerArbol);