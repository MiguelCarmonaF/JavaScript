var miReceta = {
    "descripcion" : "mi postre favorito",
    "costo" : 15.6,
    "ingredientes": {
        "masa": {
            "harina" : "100 grs",
            "sal" : "1 cucharadita",
            "agua" : "1 taza"
        },
        "cobertura": {
            "azucar" : "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla" : "200 grs"
        }
    }
};

//Para acceder

console.log(miReceta.descripcion);
console.log(miReceta.costo);
//console.log(miReceta.ingredientes);
console.log(miReceta.ingredientes.masa);
console.log(miReceta.ingredientes.masa.harina); //ACCEDES HASTA ESA PROPIEDAD DENTRO DE TODOS LOS ELEMENTOS
console.log(miReceta.ingredientes.masa["sal"]); //Con corchetes

console.log(miReceta.ingredientes.cobertura);
console.log(miReceta.ingredientes.cobertura.chocolate); //Se forma un camino, siguiendo a cada objeto
console.log(miReceta.ingredientes["cobertura"].azucar); //Con corchetes