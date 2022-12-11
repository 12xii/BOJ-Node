const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const S = Number(fs[0]), T = Number(fs[1]), D = Number(fs[2]);
console.log(D / (S * 2) * T);