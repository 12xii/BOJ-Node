const fs = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

const R1 = Number(fs[0]), S = Number(fs[1]);

console.log(S * 2 - R1);