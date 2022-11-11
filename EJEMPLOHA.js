function findNumber(arr, k) {
    
    for (let i=0; i<arr.length; i++ ){
        if (k == arr[i]){
            return "YES";
        }  
    }
    return "NO";
}

console.log(findNumber([2,3,1,5], 5));

//---------------------------------------


function oddNumbers(l, r) {
    let arr = [];
    while (l <= r) {
        arr.push(l);
        l += 1;
    };

    return arr.filter(n => n % 2);
}

console.log(oddNumbers(3,7));

//---------------------------------------

function summingSeries(n){

    let sum;

    for (i=0; i<=n ; i++){
        sum += (2*i)-1
    }
    
    return sum % 1000000007;

}

console.log(summingSeries(3));