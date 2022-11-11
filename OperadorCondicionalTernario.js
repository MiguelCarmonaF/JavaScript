function retornarMinimo(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//Se puede expresar más facil

function retornarMinimo(x, y) {
    
    return x < y ? x : y; // SI ES VERDADERA RETORNA X, SI NO RETORNA Y

}

console.log(retornarMinimo(5, 3));
console.log(retornarMinimo(2, 6));
console.log(retornarMinimo(5, 5) + "\n");

//Otro ejemplo

var a= 5;
var b= 9;

console.log(a < b ? a + 2 : b * 3);  //5 es menor que 9, por lo tanto regresa 5 + 2 o sea 7
console.log(a > b ? a + 2 : b * 3);  //5 no es mayor que 9, por lo tanto regresa 9 * 3 o sea 27