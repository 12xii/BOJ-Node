const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = fs[1].split('');
let sum = 0;

for(let i = 0 ; i < Number(fs[0]) ; i++){
    sum += Number(arr[i]);
}
console.log(sum);