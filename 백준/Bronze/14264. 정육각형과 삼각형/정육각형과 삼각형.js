const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
const Line = Number(fs);

console.log(Math.sqrt(3) / 4 * Line * Line)