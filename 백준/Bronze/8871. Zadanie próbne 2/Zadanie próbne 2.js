const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const round = Number(fs)+1;

console.log(round*2, round*3);