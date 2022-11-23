const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const plus = Number(fs[0]) + Number(fs[1]);
const minus = Number(fs[0]) - Number(fs[1]);

console.log(plus*minus)