function summingSeries(n){

    let sum=0;

    for (let i=1; i<=n ; i++){
        sum += (2*i)-1
    }
    
    return sum % 1000000007;

}

console.log(summingSeries(10));
console.log(summingSeries(2));
console.log(summingSeries(3));
console.log(summingSeries(4762607));

//-----------------------------------------

function summingSeries(n){
    
    const res = BigInt(1000000007)
    n = BigInt(n)
    let sum=BigInt(n*n);

   return sum % res;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = BigInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = BigInt(readLine().trim(), 10);

        const result = summingSeries(n);

        ws.write(result + '\n');
    }

    ws.end();
}
