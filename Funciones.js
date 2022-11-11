var miVariableGlobal=5; // VARIABLE GLOBARL SE PUEDE USAR EN TODO EL PROGRAMA

function mostrarMensaje(){
  console.log("Hola mundito :3");
}

mostrarMensaje();

function sumar(a, b){
  //a = 3 se pueden asignar los valores aquí
  //b = 5
  var suma = a + b; //variable local, sólo funciona aquí
  console.log("El resutado de " + a + " + " + b + " es: " + suma);
}
//console.log(suma); no definida, error porque está en la funcion sumar

sumar(5, 3); //o asignarlos aquí
sumar(8, 9);
var x=10;
var y=20;
sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3){
  console.log(cadena1 + " " + cadena2 + " " + cadena3 + " ");
  console.log(miVariableGlobal);
}

concatenarTresCadenas("Estoy", "Haciendo", "Nada en mi casita");
