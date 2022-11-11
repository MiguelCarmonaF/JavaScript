//Convertir a entero 

console.log(parseInt("5")); //convierte de string a int (entero);
console.log(parseInt("-5"));
console.log(parseInt("0"));
console.log(parseInt("6.7")); //Como es entero INT se redondea a 6
console.log(parseInt(6.7)); //También de numero decimal a INT 
console.log(parseInt("ABC") + "\n"); //NaN Not a Number porque no es un numero


var a = "5";
var b = "7";

//para hacer la operación 

console.log(parseInt(a) + parseInt(b) + "\n");

//o lo convertimos directamente

var c = parseInt("8");

//parseINT con una base (Decimal a hexagonal, a binario, etc.)

console.log(parseInt("110111", 2)); //2 es la base, base 2 binario
console.log(parseInt(110111, 2));  //Convierte de un numero binario a decimal
console.log(parseInt("3E0A", 16)); //Con numero HEXADECIMAL a decimal.
        //Hexadecimal no se puede como INT, 3E0A sin comillas marca error