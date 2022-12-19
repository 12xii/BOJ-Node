const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Cake = Number(fs[0]) * 8 + Number(fs[1]) * 3;

console.log(Cake - 28);