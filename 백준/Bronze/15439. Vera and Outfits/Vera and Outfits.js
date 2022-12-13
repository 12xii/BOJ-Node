const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(fs);
console.log(num * (num-1));