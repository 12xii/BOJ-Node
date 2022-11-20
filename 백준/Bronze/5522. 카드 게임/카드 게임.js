const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
for(let i = 0 ; i < 5 ; i++){
    sum += Number(fs[i]);
}
console.log(sum);