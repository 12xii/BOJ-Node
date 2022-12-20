const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '', sum;
for(let i = 0 ; i < fs.length - 1 ; i++){
    sum = 0;
    for(let j = Number(fs[i]) ; j > 0 ; j--){
        sum += j;
    }
    arr += sum + '\n';
}

console.log(arr);