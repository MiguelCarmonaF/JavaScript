//AND
//AMBOS VALORES DEBEN SER TRUE PARA QUE LA SALIDA SEA TRUE

console.log(true && true); //salida true
console.log(true && false); //salida false
console.log(false && true); //salida false
console.log(false && false); //salida false
var a=8;
var b=15;
console.log((a > 5) && (a < 10)); // true, 8 mayor que 5 y menor que 10
console.log((b > 5) && (b < 10)); //false, 15 mayor que 5 pero 15 mayor que 10
console.log((b > 15) && (b < 1)); //false 15 no es mayor que 15 y 15 no es menor que uno

//OR
//SOLO UN VALOR DEBE SER TRUE PARA QUE LA SALIDA SEA TRUE
console.log(true || true); //salida true
console.log(true || false); //salida true
console.log(false || true); //salida true
console.log(false || false); //salida false

console.log((a<5) || (a > 15)); //False y false, salida false
console.log((a<10) || (a > 15)); //True y false, salida TRUE
console.log((a==8) || (a < 15)); //true y true salida true

//NOT
//NIEGA LA SALIDA 
console.log(!true); //false
console.log(!false); //true

console.log(!(a > 5)); //8 mayor que 5 TRUE, pero se niega entonces FALSE
console.log(!(a < 5)); //8 menor que 5 FALSE, pero se niega TRUE