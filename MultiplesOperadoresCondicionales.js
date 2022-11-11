function compararNumeros0(a, b){
    if (a === b){
        return "a y b son iguales";
    } else if (a > b) {
        return " a es mayor que b";
    } else {
        return "b es mayor que a";
    }
}

//lo de arriba pero mucho más sencillo

function compararNumeros(a, b){
    return a == b ? "a y b son iguales" 
    : a > b ? "a es mayor que b" 
    : "b es mayor que a";
}

console.log(compararNumeros0(11, 27));
console.log(compararNumeros(11, 27) + "\n");

console.log(compararNumeros0(27, 11));
console.log(compararNumeros(27, 11) + "\n");

console.log(compararNumeros0(15, 15));
console.log(compararNumeros(15, 15) + "\n");