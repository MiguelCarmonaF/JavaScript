
//VAR SE CREA UNA VARIABLE GLOBAL O LOCAL (SI ES EN UNA FUNCIÓN)
var campista = "tuki"; //usando var se pueden declarar varias veces
var campista = "hola"; //Se declara de nuevo
campista = "jejeje"; //y se puede cambiar su valor
console.log(campista);


//LET SÓLO TE PERMITE SER USADA DONDE SE DECLARA, POR EJEMPLO EN UN CICLO FOR NO SE PUEDE USAR FUERA DEL CICLO
let hola = "tuki";  //usando let sólo se declara una vez
//let hola = "jeje"; //Marca error, no se pueden declarar nuevamente
hola = "cambie valorsito"; //Pero si se puede cambiar su valor
console.log(hola);

for (let i=0; i<4; i++){
}
console.log(i); //ERROR, sólo dentro del ciclo (VAR SI TE DEJA FUERA)

if (hola){
    let color = "verde";
}
console.log(color); //ERROR, sólo dentro del if, CON VAR SI TE DEJA


//CONST NO SE PUEDE MODIFICAR UNA VEZ QUE HA SIDO ASIGNADA
const postre = "pay"; // const no permite declarar ni cambiar valor nuevamente
//const postre = "tuki"; //marca error
postre = "hola"; //marca error al ejecutar
console.log(postre);
const MI_CONSTANTE = 35; //Mayusculas y se separan con guión bajo para distinguirlas 



//EJEMPLO

function calcularAreaCirculo(radio){
    const PI =3.14; //necesitamos que el valor se mantenga siempre

    if (radio <0){
        return undefined;
    }

    return PI * (radio ** 2); //** ES POTENCIA 

}