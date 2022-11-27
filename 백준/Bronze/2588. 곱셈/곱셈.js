const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const mul = fs[1].split('');

console.log(Number(fs[0]) * Number(mul[2]));
console.log(Number(fs[0]) * Number(mul[1]));
console.log(Number(fs[0]) * Number(mul[0]));

console.log(Number(fs[0]) * Number(fs[1]))