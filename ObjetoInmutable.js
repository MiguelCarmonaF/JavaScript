let colores = {
    "verde" : "#10e",
    "azul" : "#1b50e0",
    "negro" : "#000000",
    "blanco" : "#ffffff"
};


Object.freeze(colores);//CONGELA EL OBJETO, NO SE PUEDEN MODIFICAR/BORRAR/AÑADIR PROPIEDADES Y SUS VALORES

colores.amarillo = "#fff200"; //NO LO AGREGA 
console.log(colores);

colores.verde = "#fff200"; //NO LO MODIFICA
console.log(colores);

delete colores.blanco; //NO LO BORRA