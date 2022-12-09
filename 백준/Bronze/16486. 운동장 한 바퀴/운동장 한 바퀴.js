const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const d1 = Number(fs[0]), d2 = Number(fs[1]);
console.log(d1 * 2 + d2 * 2 * 3.141592);