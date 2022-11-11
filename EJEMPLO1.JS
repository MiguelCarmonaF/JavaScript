

function algoritmo(){

    for (i=0; i<101; i++){
        if(i % 3 == 0 && i % 5 ==0){
            console.log(i + " FizzBuzz");
        } else if (i % 5 == 0){
            console.log(i + " Buzz");
        } else if (i % 3 == 0){
            console.log(i + " Fizz");
        } else {
            console.log(i);
        }
    }

}

function algoritmo2(){
    for (i=0; i<101; i++){
        return i%3 ==0 && i%5==0 ? i + " FizzBuzz" 
        : i%3==0 ? i + " Fizz"
        : i%5==0 ? i + " Buzz"
        : i;
    }
}

function algoritmo3(){

    for (i=0; i<101; i++){
        let mensaje = i + "";
        if(i % 3 == 0 ){
            mensaje+= " Fizz";
        }
        
        if(i%5 == 0){
            mensaje += " Buzz";
        }

        console.log(mensaje);
    }

}

//algoritmo();
//console.log(algoritmo2());
//algoritmo3();

