// Para que te diga el tipo de numero (1,2,3,4,5) que se conto más, ejemlpo [1,2,3,2,2] --> El numero 2 está 3 veces, por lo tanto se imprime 2.
arr = [1,2,2,2];
const counts = new Array(6).fill(0);
arr.forEach(element => counts[element] += 1);
console.log(counts.reduce((acc, element, index) => counts[acc] < element ? index : acc, 0));

//Para que te diga el programa en que dia es año bisiesto en rusia, antes de 1917 se usaba el julian calendar, 
//después de 1919 el gregorian. 1918 fue un caso especial  cuando se hizo el cambio

function dayOfProgrammer(year) {
    
    if (year>=1700 && year<=1917){
        return year%4==0 ? `12.09.${year}` : `13.09.${year}`;
    } else if (year>=1919 && year<=2700){
      return  year%400==0 || (year%4==0 && year%100!=0) ? 
      `12.09.${year}` : `13.09.${year}`;
    } else if (year==1918){
        return `26.09.${year}`; 
    } else {
        console.log("Wrong year, it must be between 1700-2700");
    }
}

// CONVERTIR HORAS EN FORMATO 12 A 24 (La salida es string y la entrada tmb)

function timeConversion(s) {
    let hours = parseInt(s[0] + s[1]);
    let min = s[3] + s[4];
    let sec = s[6] + s[7];
    let mer = s[8] + s[9];
    if (mer=="AM"){
        hours = hours.toString().padStart(2,'0');
        return hours==12 ? `00:${min}:${sec}` : `${hours}:${min}:${sec}`;
    } else {
        return hours==12 ? `12:${min}:${sec}` : `${hours+=12}:${min}:${sec}`;
    }
}

console.log(timeConversion("07:05:45PM"));

// Sumar los elementos positivos, negavitos y ceros de una array y dividirlos entre el numero de elementos

function plusMinus(arr) {
    
    var pos = arr.filter(element => Math.sign(element)==1);
    var neg = arr.filter(element => Math.sign(element)==-1);
    var zero = arr.filter(element => Math.sign(element)==0);
    
    console.log((pos.length/arr.length).toFixed(6));
    console.log((neg.length/arr.length).toFixed(6));
    console.log((zero.length/arr.length).toFixed(6));

    /* GUARDANDO LOS VALORES EN VARIABLES Y RETORNAR COMO OBJETO O ARRAY

    var ansPos = pos.length/arr.length;
    var ansNeg = neg.length/arr.length;
    var ansZero = zero.length/arr.length;
    */

    // return [ansPos,ansNeg,ansZero]; 

    /* 
    return {
        "positivos" : ansPos,
        "negativos" : ansNeg,
        "zeros" : ansZero
    } retornar objeto*/
}


plusMinus([1,-1,1,1,0,-2]);

//Hacer una piramide con # y espacios a la izquierda, tu decides la altura con n (PADSTART NO CAMBIA EL VALOR DE LA VARIABLE ORIGINAL)

function staircase(n) {
    let staircase= "";
    for (let i=1; i<=n; i++){
        staircase+="#"
        console.log(staircase.padStart(n));
    }
}

staircase(20);