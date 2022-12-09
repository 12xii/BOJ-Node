const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = (Number(fs[0]) + Number(fs[1])) / 2, b = Math.abs(Number(fs[0]) - Number(fs[1])) / 2;

if(a.toString().includes('.') || b.toString().includes('.')) console.log('-1');
else if(a + b == Number(fs[0]) && a - b == Number(fs[1])) console.log(a, b);
else console.log('-1');