//FRACCION ALEATORIA
function generarFraccionAleatoria(){
    return Math.random(); //Genera un numero aleatorio entre 0 y 1(uno no lo cuenta)
}

console.log(Math.random());
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log("\n")

//NUMEROS ENTEROS ALEATORIAS 

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20); //Retorna el mayor numero entero
    //Math.floor redondea hacía abajo. 12.93123 lo dejará en 12
    //Math random * 20 siempre te dará un numero por debajo de 20 (19), si es por 30 por debajo de 30 (29), si es 40 por debajo de 40 (39) y así sucesivamente....

console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(30)); //Entre 0 y 29
console.log(generarEnteroAleatorio(5)); //Entre 0 y 4
console.log(generarEnteroAleatorio(40));
console.log("\n")

//NUMERO ENTEROS ALEATORIOS ENTRE UN RANGO

function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior-limiteInferior + 1)) + limiteInferior;
    //Esta función SI INCLUYE LIMITE SUPERIOR E INFERIOR
}

console.log(rangoAleatorio(3, 8)); //INCLUYE 3 Y 8
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));

