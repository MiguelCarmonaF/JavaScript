function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(4));

// CON STRING
var producto = "hamburguesa";

switch (producto){
    case "pizza":
        console.log("Cuesta 10 pesos");
        break;
    case "hamburguesa":
        console.log("Cuesta 3 pesos");
        break; 
    case "helado":
        console.log("El helado cuesta 2 pesos");
        break;
}

//OPCION PREDEFINIDA CON SWITCH

function seleccionarIdioma(valor){
    var idioma;
    switch (valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma(1)); //pone opción uno
console.log(seleccionarIdioma(5)); //no hay case 5, por lo tanto pone el default

//Para multiples casos 

function clasificarVolumen(valor){
    var volumen;
    switch (valor){
        case 1:
            volumen = "bajo";
            break;
        case 2: //2 y 3 ejecutan el codigo que se encuentra en 3
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5: //4 5 y 6 ejecutan el codigo que se encuentran en 6
        case 6:
            volumen = "Alto";
            break;
        default:
            volumen = "No se tiene volumen";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(1)); //bajo
console.log(clasificarVolumen(2)); //intermedio
console.log(clasificarVolumen(3)); //intermedio
console.log(clasificarVolumen(4)); //Alto
console.log(clasificarVolumen(6)); //Alto
console.log(clasificarVolumen(8)); //No se tiene volumen