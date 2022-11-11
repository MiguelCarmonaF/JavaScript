var conteo=0;
function blackjack(carta){
    var decision;
    switch (carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }
    if (conteo>0){
        return conteo + " Apuestale papito";
    } else {
        return conteo + " Uy no mejor esperate";
    }
}

console.log(blackjack(2));
console.log(blackjack(3));
console.log(blackjack(7));
console.log(blackjack("K"));
console.log(blackjack("A"));