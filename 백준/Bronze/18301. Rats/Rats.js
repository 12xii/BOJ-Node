const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n1 = Number(fs[0]), n2 = Number(fs[1]), n3 = Number(fs[2]);
console.log(Math.floor((n1 + 1) * (n2 + 1) / (n3 + 1) - 1));