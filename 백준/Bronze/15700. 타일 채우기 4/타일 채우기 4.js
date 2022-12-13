const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = BigInt(fs[0]), M = BigInt(fs[1]);

let arr = ''
if(N * M % BigInt(2) == BigInt(1)) arr += ((N * M) - BigInt(1)) / BigInt(2);
else arr += N * M / BigInt(2);

console.log(arr.replace('n', ''));