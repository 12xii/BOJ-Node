const fs = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(fs);
console.log(num-1946);