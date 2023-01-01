const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = Number(fs[0]), B = Number(fs[1]), C = Number(fs[2]);

let count = -1;

if(B < C) count = Math.floor(A / (C - B) + 1);

console.log(count);