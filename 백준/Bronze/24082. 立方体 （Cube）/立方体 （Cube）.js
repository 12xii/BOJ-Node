const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(Math.pow(Number(fs), 3))