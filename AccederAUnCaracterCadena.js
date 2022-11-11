var lenguajeDeProgramación="JavaScript";
var n=2;
//Cadena: J a v a S c r i p t 
//Indice: 0 1 2 3 4 5 6 7 8 9

console.log(lenguajeDeProgramación[0]);
console.log(lenguajeDeProgramación[3]);
console.log(lenguajeDeProgramación[lenguajeDeProgramación.length-1]); //El ultimo indice siempre es la longitud-1
console.log(lenguajeDeProgramación[lenguajeDeProgramación.length-3]);
console.log(lenguajeDeProgramación[lenguajeDeProgramación.length-n]); //también se puede usar dos variables
//Inmutabilidad (no se puede cambiar)

var miCadena = "Jola, Mundo";

console.log(miCadena);

miCadena[0]= "H"; //ERROR, no se pueden cambiar las cadenas

console.log(miCadena);

//SE HACE ESTO

miCadena= "Hola, Mundo";

console.log(miCadena);


