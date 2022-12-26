const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = BigInt(fs[0]), B = BigInt(fs[1]);
console.log((A + B).toLocaleString().replace('n', '').replaceAll(',', ''));