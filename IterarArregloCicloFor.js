var miArreglo=[4,6,8,2];
var total = 0;

for (var i=0; i<miArreglo.length; i++) { //Mientras que sea menor longitud del arreglo
    total += miArreglo[i];
}

console.log(total);
console.log("\n");

//Con caracteres para hacerlos mayusculas

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i<lenguajes.length; i++){
    console.log(lenguajes[i].toUpperCase()); //toUpperCase convierte todo a mayusculas
}
console.log("\n");
//funcion contar numeros pares

function contarNumerosPares(arreglo){
    var totalNumerosPares = 0;
    for(var i=0; i<arreglo.length; i++){
        if (arreglo[i] % 2 == 0){ //El elemento es par si el resto de su división es 0 
            totalNumerosPares++; //Significa que tenemos un par :)
        }
    }
    return totalNumerosPares;
}

console.log(contarNumerosPares([5, 3, 1])); //Pasamos un arreglo con 0 pares
console.log(contarNumerosPares([5,2,10,12,3,7,4]));