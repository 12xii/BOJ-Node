const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(fs[0]);
let sum = 0;

for(let i = 1 ; i <= testCase ; i++){
    sum += Number(fs[i]);
}

console.log(sum);