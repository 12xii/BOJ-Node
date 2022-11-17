const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Number(fs[0])+Number(fs[1]));