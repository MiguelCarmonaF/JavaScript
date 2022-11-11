function proximoEnLaFila(arr, ele){
    arr.push(ele); //Agregar al final del arreglo
    return arr.shift(); //Remover primer elemento
}

var miArreglo=[1, 2, 3, 4, 5]; //FILA COLA MODIFICARLA
console.log("Antes de la función: " + JSON.stringify(miArreglo)); //JSON.stringify(miArreglo) lo convierte a string y lo muestra bonito

console.log("El elemento eliminado fue: " + proximoEnLaFila(miArreglo, 6)); //Imprime el valor retornado con la función

//proximoEnLaFila(miArreglo, 6); con este no imprime el valor retornado en la función

console.log("Después de la función: " + JSON.stringify(miArreglo));