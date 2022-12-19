const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = BigInt(fs[1]), M = BigInt(fs[2]);

console.log((N * M).toString().replace('n', ''));