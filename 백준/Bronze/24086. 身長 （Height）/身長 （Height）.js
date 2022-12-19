const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Number(fs[1]) - Number(fs[0]));