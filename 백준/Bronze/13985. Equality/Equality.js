const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(fs[0]), b = Number(fs[2]), c = Number(fs[4]);

if(a + b == c) console.log('YES');
else console.log('NO')