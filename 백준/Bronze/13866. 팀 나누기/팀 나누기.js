const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(fs[0]), b = Number(fs[1]), c = Number(fs[2]), d = Number(fs[3]);

console.log(Math.abs((b+c) - (a+d)));