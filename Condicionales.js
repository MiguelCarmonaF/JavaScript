if (true) { //SE EJECUTA
    console.log("VERDADERO SE CUMPLE");

}

if (false) { //NO SE EJECUTA
    console.log("falso no se CUMPLE");

}

var x=5;

if (x > 2){ //SE EJECUTA PORQUE 5 > 2 SE CUMPLE
    console.log("5 si es mayor que 2");
}

if (x < 2){ //NO SE EJECUTA PORQUE 5 < 2 NO SE CUMPLE
    console.log("5 NO ES MENOR QUE 2");
}

//pueden ser más complejos

if (x < 2){ //NO SE EJECUTA PORQUE 5 < 2 NO SE CUMPLE
    console.log("5 NO ES MENOR QUE 2");
}

if (x<2 || x>3){ //Se ejecuta porque 5 si es mayor que tres
    console.log("If con or");
}


//UTIILZAR IF CON ELSE

var estacion = "Inviernoo";

if (estacion === "Invierno"){
    console.log("Si, me gusta el invierto"); //si se cumple se ejecuta esto
} else {
    console.log("Uy, no es invierno:(") //Si no se cumple se ejecuta esto
}

//ELSE IF

function clasificarValor(valor){
    if (valor % 2 ==0){ // Si el valor se divide entre 2 , genera residuo 0
        console.log("Divisible entre 2.");
    } else if ( valor % 3 == 0){ //Si no se ejecuta el anterior, se evalua esta si es true se ejecuta
        console.log("Divisible entre 3")
    } else { //Si la anterior es falsa, se ejecuta esto
        console.log("No es divisible");
    }
}

clasificarValor(2);
clasificarValor(3);
clasificarValor(5);

//ORDEN LOGICO

function clasificarValorsito(valorsito){
    if (valorsito < 5){
        console.log("Menor que 5");
    } else if (valorsito < 10){
        console.log("Menor que 10");
    } else {
        console.log("Mayor o igual a 10");
    }
}

clasificarValorsito(2); //Va en orden y solo se ejecuta la primera condicion que se cumple, ya que el else if
//también cumple con esta condicion 
clasificarValorsito(6);
clasificarValorsito(11);

//Varias sentencias else if

function interpretarIMC(indiceIMC){
    if (indiceIMC < 18.5){
        console.log("Bajo peso");
    } else if (indiceIMC <= 24.9){
        console.log("Peso normal");
    } else if (indiceIMC <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Tienes obesidad krnal")
    }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(25);
interpretarIMC(30);

