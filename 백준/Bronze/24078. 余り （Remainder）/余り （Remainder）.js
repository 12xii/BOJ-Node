const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(Number(fs) % 21);