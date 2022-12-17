const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log((Number(fs[0]) + Number(fs[1]) + Number(fs[2]) + Number(fs[3]) + Number(fs[4]) + Number(fs[5])) * 5);