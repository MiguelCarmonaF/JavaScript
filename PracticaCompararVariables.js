var a;
var b;

a = 5;
b = 5;

console.log(a == b); //true
console.log(a === b); //true

b= 8;

console.log(a == b); //false
console.log(a === b); //false mismo tipo de dato pero diferente valor

b= "5";

console.log(a == b); //true
console.log(a === b); //false

a = "Javascript";
b = "Javascript";

console.log( a==b ); //true 
console.log( a===b); //true