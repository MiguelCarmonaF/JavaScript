function isPangram(pangram) {
    
    var lowerPangram = [];
    
    lowerPangram.forEach(element => {
        lowerPangram.push(element.toLowerCase());
    })
    var letters = ["a","b","c","d","e","f","g","j","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for (let i = 0; i<letters.lenght; i++){
        if (lowerPangram.indexOf(letterArray[i]) ==-1){
            return "0";
        }
    }
    
    return "1";

}

console.log(isPangram(4));
console.log(isPangram("we promptly judged antique ivory buckles for the next prize"));
console.log(isPangram("we promptly judged antique ivory buckles for the prizes"));