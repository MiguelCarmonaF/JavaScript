/* CARACTERISTICAS:

-Se define usando el acento invertido `
-pueden contener comillas simples y dobles
-Las lineas se preservan como se escriben en el código.
- Para remplazar una variable se escribe ${variable}.
- Dentro de ${} se pueden escribir expresiones
*/

var a = 6;

console.log(`El valor de a es ${a}`);

var nombre = "Nora";
var edad = 6;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`); 

var miArreglo = [1,2,3,4];

console.log(`El arreglo es ${miArreglo}`);
console.log(`El arreglo es ${JSON.stringify(miArreglo)}`); //MEJOR PRESENTADO

var persona = {
    nombre: "Gino Cass",
    edad: 10,
};

const SALUDO = `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;
console.log(SALUDO);