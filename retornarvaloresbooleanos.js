function esMenorQue(a, b){
    /*f ( a < b){
        return true;
    } else {
        return false;
    }                     TODO ESTO SE PUEDE REMPLAZAR CON:*/ 

    return a < b; //hace la comparación directamente
}

console.log(esMenorQue(4, 3));

//RETORNO ANTICIPADO

function miFuncion(){
    console.log("hola");
    return "mundo";
    console.log("adios"); //ya no se ejecuta esta parte del código. 
}

function calcularRaizCuadrada(num){
    if (num < 0){
        return undefined;
    }
    return Math.sqrt(num); //este comando calcula la raiz cuadrada
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));

