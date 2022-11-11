var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum : "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

function actualizarDiscos (discos, id, propiedad, valor){
    if (valor === ""){
        delete discos[id][propiedad];
    } else if (propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || []; //Primero checa si se tiene esa propiedad (parte izquierda or), sino la agrega (parte derecha or) 
        discos[id][propiedad].push(valor); //Lo anterior evita que .push mande a llamar un valor " nulo ", generando un error
    } else {
        discos[id][propiedad] = valor; //Si no existe se crea, si existe se actualiza
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum + "\n");


console.log(coleccionDeDiscos[5439].tituloDelAlbum);
console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma mia");
console.log(coleccionDeDiscos[5439].canciones + "\n");

console.log(coleccionDeDiscos[5439].tituloDelAlbum);
console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);