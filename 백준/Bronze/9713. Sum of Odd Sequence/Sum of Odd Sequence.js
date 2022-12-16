const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(fs[0]);
let sum = 0, arr = '';

for(let j = 1 ; j <= T ; j++){
    sum = 0;
    for(let i = 1 ; i <= Number(fs[j]) ; i += 2){
        sum += i;
    }
    arr += sum + '\n';
}


console.log(arr)