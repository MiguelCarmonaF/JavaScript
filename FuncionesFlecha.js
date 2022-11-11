//Son funciones más compactas y anonimas ( sin nombre especifico)
//Son muy utiles cuando necesitas pasar una función como argumento de otra función
const fecha = () => new Date(); // => flecha


//Funcion anonima
const sumarTres = function(x){
    return x + 3;
};

//A función flecha

const sumarTres2 = (x) => x + 3;
console.log(sumarTres2(4));

//Otro ejemplo a función flecha

/*const concatenar = function (arr1, arr2){
    return arr1.concat(arr2);  //.concat añade un arreglo a otro
}

console.log(concatenar([1, 2], [3, 4, 5]));
*/

const concatenar = (arr1, arr2) => arr1.concat(arr2); 
console.log(concatenar([1, 2], [3, 4, 5]));

//Si la funcion tiene más de una linea

/*const sumar = function (a, b){
    let num=6;
    return a + b + num;
}
*/

const sumar = (a, b) =>{
    let num=6;
    return a + b + num;
}

console.log(sumar(1,2));


//Valor por defecto a los parametros

const incrementar = (num, valor = 1) => num + valor; //Si no se ingresa VALOR, toma 1 por defecto, si se ingresa pues ese
console.log(incrementar(5));
console.log(incrementar(5, 3));

//Operador REST permite pasar cualquier numero de argumentos a una funcion y se agruplen como un arreglo

function miFuncion(...args) { //tres puntos antesargs argumento, variable
    console.log(args);
    console.log(args.lenght);
}

miFuncion(1);
miFuncion(2,3,4,5,6); //LO REGRESA COMO UN ARREGLO
miFuncion([2,3,4,5,6], [1]); //ANIDA LOS ARREGLOS

//EJEMPLITO

const sumar1 = (...args) => {
    return args.reduce((a, b) => a + b, 0); //.reduce suma los elementos del arreglo y retorna el resultado EL ULTIMO ES EL VALOR INICIAL, O SEA 0
};                                          //valor inicial cero

console.log(sumar1(1,2,3,4,5,6));

//OPERADOR SPREAD
//Toma un arreglo y saca los elmentos individuales

const numeross=[1,2,3]; //ESTO ES UNA ARREGLO, no 3 NUMEROS SEPARADOS
function sumar3(x,y,z){
    return x + y + z;
}

        //sumar(numeross);  //NO PODEMOS HACER ESTO PORQUE ES UN ARREGLO
        // SUMAR (numeross[0], numeross[1]...) ESTO SI PERO ES TEDIOSO

console.log(sumar3(...numeross)); //Ahora si pasa los numeros individuales del arreglo, 1 2 y luego 3