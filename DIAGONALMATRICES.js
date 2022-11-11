function diagonalDifference(arr) {
    let u=0;
    let x=arr.length;
    let sum1=0;
    let sum2=0;
    for (let i=0; i<arr.length; i++){
        for (let j=0;j<arr[i].length; j++){
            sum1+=arr[u][u];
            sum2+=arr[u][x];
            u+= 1;
            x-= 1;
        }
    }
    return sum1-sum2;
}

let array = [[11,2,4],[4,5,6],[10,8,-12]];
console.log(diagonalDifference(...array));