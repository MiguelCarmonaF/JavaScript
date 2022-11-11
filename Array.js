var miArreglo = ["John", 24]; 
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

//Para acceder al elemento de un array

console.log(estudiantes[3]);

//Para sumar los elementos de un array

var notas = [95, 67, 89, 56];
console.log(notas);
var suma = notas[0] + notas[1] + notas[2];
console.log(suma);

//Para agregar un elemento a un array

notas.push("Verano");
console.log(notas);

//para eliminar un ultimo elemento de un array

var verano = notas.pop(); //Eliminas y retornas el valor, o puede ser nomás notas.pop().
console.log(notas);
console.log(verano);

//Para eliminar un primer elemento de un array

notas.shift();
console.log(notas); 

//para agregar un elemento al principio de un array

notas.unshift("Invierno"); 
console.log(notas);


//Para modificar el elemento de un array

notas[0]= 30
notas[1]= "Miguel";
notas[2]= [1,0,0]
console.log(notas);

//Otros Array

var ListaEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(ListaEstudiantes);

var listaDeProductos = [["Camisa", 5.67, "S134"], ["Pantalon", 3.34, "S333"], ["Calzón", 1.22, "S212"]];
console.log(listaDeProductos);


