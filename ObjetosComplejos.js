var ordenesDePizzas = [ //TENEMOS UN ARREGLO
    {                   //QUE TIENE DOS OBJETOS
        "tipo" : "margarita", //ESTAS SON SUS PROPIEDADES
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [ //ESTA PROPIEDAD TIENE UN ARREGLO CON VARIOS VALORES
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo" : "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    },
    {
        "tipo" : "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "paraLlevar": true
    }
]

console.log(ordenesDePizzas[0]); //primer objeto
console.log(ordenesDePizzas[1]); //segundo objeto

console.log(ordenesDePizzas[0].tipo); //Tipo de pizza es margarita
//console.log(ordenesDePiizza[0]["tipo"]);  ESTE CON CORCHETES
console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[0].toppings);

