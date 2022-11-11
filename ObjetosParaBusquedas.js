/*function buscarElementoQuimico(simbolo){ cuando se relacionan dos valores, se puede hacer con un objeto
    var elementoQuimico = " ";
    
    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "B":
            elementoQuimico = "Boro";
            break;
        case "Li":
            elementoQuimico = "Litio";
            break;
    }

    return elementoQuimico;
} */

//Lo anterior pero con un objeto

function buscarElementoQuimico(simbolo){
    var simbolosQuimicos = {
        "Al" : "Aluminio",
        "S" : "Azufre",
        "Cl" : "Cloro",
        "He" : "Helio",
        "B" : "Boro",
        "Li" : "Litio"
    };
    return simbolosQuimicos[simbolo]; //Regresa la propiedad (su valor) que se introduce con simbolo
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));
