function Golf(par, golpes){
    if (golpes==1){
        return "Felicidades, Hole-in-one!";
    } else if (golpes<=par-2){
        return "Wow, un Eagle!";
    } else if (golpes==par-1){
        return "Tienes un Birdie!";
    } else if (golpes==par){
        return "Par";
    } else if (golpes==par+1){
        return "Bogey, mejora tus tiros!";
    } else if (golpes==par+2 ){
        return "Double Bogey, mala suerte:(";
    } else if (golpes >=par+3){
        return "Go gome! Malardo";
    }
}

console.log(Golf(4, 10));