const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = BigInt(fs[0]), B = BigInt(fs[1]);
let arr = '';
arr += A+B;

console.log(arr.replace('n', ''));