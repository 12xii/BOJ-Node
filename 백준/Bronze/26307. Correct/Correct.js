const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const h = Number(fs[0]), m = Number(fs[1]);

console.log((h-9) * 60 + m);