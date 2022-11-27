const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const m = BigInt(fs[0]);
const n = BigInt(fs[1]);

let log1 = '';
log1 += m/n;
let log2 = '';
log2 += m - (m/n)*n;4

console.log(log1);
console.log(log2);