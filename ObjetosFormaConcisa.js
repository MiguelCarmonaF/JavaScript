const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("Tuki", 28, "Español"));

//Se hace mucho más facil de esta forma:

const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona2("Tuki", 28, "Español"));