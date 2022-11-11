
var contactos = [
    {
        "nombre" : "Nora",
        "apellido" : "Nav",
        "numero" : "0543236543",
        "gustos" : ["pizza", "programación"]
    },
    {
        "nombre" : "Harry",
        "apellido" : "Potter",
        "numero" : "0994372684",
        "gustos" : ["Hogwarts", "Magia"]
    },
    {
        "nombre" : "Sherlock",
        "apellido" : "Holmes",
        "numero" : "0487345643",
        "gustos" : ["Casos interesantes", "Violin"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i<contactos.length; i++){
        if(contactos[i]["nombre"] === nombre){
            return contactos[i][propiedad] || "La propiedad no existe"; //Si no existe me retorna la cadena de caracteres
        }
    }
    return "El contacto no está en la lista";
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Sherlock", "apellido"));
console.log(buscarPerfil("Sherlock", "Tuki"));
console.log(buscarPerfil("Tuki", "gustos"));