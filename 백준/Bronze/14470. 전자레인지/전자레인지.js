const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(fs[0]), b = Number(fs[1]), c = Number(fs[2]), d = Number(fs[3]), e = Number(fs[4]);

if(a < 0) console.log(Math.abs(a) * c + d + e * Math.abs(b));
else console.log((b - a) * e);