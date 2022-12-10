const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const N = Number(fs[1]), M = Number(fs[2]);

console.log(Math.floor(M/N), M%N);