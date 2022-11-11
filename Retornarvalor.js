function sumar(a, b){
    return a + b; //Regresa el valor de la suma
}

console.log(sumar(5, 3));

//UNDEFINED EN FUNCIONES

function restar(a, b){
    console.log(a-b); //SE MUESTRA SOLO EL VALOR DE LA SUMA EN PANTALLA
    // ESTE VALOR NO PUEDE SER USADO EN EL PROGRAMA
}

console.log(restar(5, 3)); //SE MUESTRA UNDEFINED PORQUE NO SE REGRESÓ EL VALOR
//NO EXISTE , REGRESA NADA


//ASIGNAR UN VALOR RETORNADO

function multiplicar(a, b){
    return a + b;
}

var resultado = sumar (5, 3); //Guarda el valor retornado de una funcion en la variable, se puede usar en el programa
console.log(resultado);


function crearCadena(lenguajeProgramación){
    return "Mi meta es aprender " + lenguajeProgramación;
}

var tuki=crearCadena("JavaScript");
console.log(tuki);