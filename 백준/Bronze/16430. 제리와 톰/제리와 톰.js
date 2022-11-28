const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const so = Number(fs[0]);
const mo = Number(fs[1]);

console.log(mo-so, mo);