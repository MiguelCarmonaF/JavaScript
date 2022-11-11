//IGUALDAD (No se comparan arreglos, no se comparan los elementos sino los arreglos en la memoria representan el mismo objeto )

console.log(5==5); //True
console.log(5==2); //false

console.log("Hola" == "Hola"); //true
console.log("Hola" == "hola"); //Falso por la mayuscula

//IGUALDAD ESTRICTA
//tiene que ser mismo valor y mismo tipo de dato para true
console.log(9 == 9); //true
console.log(9 == "9"); //true, compara el valor no el tipo de dato
console.log(9 === 9); //true, compara el tipo de dato
console.log(9 === "9"); //false, compara el tipo de dato y es diferente

//DESIGUALDAD
//Retorna true si son diferentes, false si son iguales

console.log( 9 != 6); //true, es diferente
console.log( 9 != 9); //false, es igual
console.log("Js" != "Js"); //false
console.log("Jss" != "Js"); //true

//DESIGUALDAD ESTRICTA
//Compara los tipos de datos

console.log(1 != "1"); //Falso, porque son iguales
console.log(1 !== "1"); //true, porque el tipo de dato es diferente

//MAYOR QUE
console.log( 6>5); //true
console.log( 3>10 ); //false
console.log("B" > "A"); //Se guia por el alfabeto, B después de A en abecedario así que true 
console.log("ACB" > "ABC"); //compara uno por uno, A=A C después que B por lo tanto true
console.log("AB" > "A"); // True, tiene más caracteres
console.log("Mundo" > "Hola"); //True, M después de H

//MAYOR IGUAL QUE
console.log( 5>=5 ); //True, MAYOR O IGUAL cadena de caracteres es igual a mayor que

//MENOR QUE
console.log( 5 < 6); //true, menor
console.log(10 < 3); //false, 10 es menor
console.log("A" < "B") //Es true, A viene antes que B en abecedario
console.log("ABC" < " ACB") //Es true, B viene antes que la C

//MENOR IGUAL QUE
console.log(5 <= 5); //true
console.log(5 <= 3) //false, 5 es mayor

