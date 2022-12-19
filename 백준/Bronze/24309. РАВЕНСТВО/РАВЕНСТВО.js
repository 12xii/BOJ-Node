const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const a = BigInt(fs[0]), b = BigInt(fs[1]), c = BigInt(fs[2]);

console.log(((b-c)/a).toString().replace('n', ''));