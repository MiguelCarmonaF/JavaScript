//CICLO WHILE

 var i = 0;
 while (i <= 3){ //mientras que la condición sea verdadera
    console.log("Hola, Mundo " + i);
    i++ //incrementamos el valor de la variable para que sea posible salir de la condición
 } 

 console.log("\n");

 var miArreglo= [];
 i=0;
 console.log(miArreglo);

 while ( i < 10) {
    miArreglo.push(i); //agregamos el ultimo elemento
    i++
 }
 console.log(miArreglo);

 console.log("\n");

 var numeros = [2,3,4,5,6,8,9,34];

 while (numeros.length > 4){ //Mientras que la longitud del arreglo sea mayor que cuatro
    numeros.pop(); //removemos el ultimo elemento
 }

 console.log(numeros);

 console.log("\n");

 //CICLOS FOR

 var miArreglo2 = [];

 for (var i = 0; i < 10; i++){ //En lugar de una condición, se especifican 3 valores
     miArreglo2.push(i);        //i+=2   i+=3, etc... se puede incrementar diferentes valores
 }

 console.log(miArreglo2);
 console.log("\n");

 //CICLOS FOR HACÍA ATRAS

 for (var i =15; i>=10; i--){ //i-=2 i-=3, etc;
    console.log(i);
 }

 var miArreglo3 = [];
 for (var i=10; i>0; i-=2){
    miArreglo3.push(i);
 }

 console.log(miArreglo3);

 //CICLO DO WHILE

 var x = 16;
 do { //ESTE CICLO SE VA A EJECUTAR POR LO MENOS UNA VEZ, se ejecuta y luego checa la condición
    console.log(x);
    x++
 } while (x<10); //no se cumple, pero se ejecutó una vez
                 //Cuando un usuario ingresa un valor se puede verificar si es valido o no con do while
                 //Si no es valido puedes volver a pedirlo hasta que sea valido