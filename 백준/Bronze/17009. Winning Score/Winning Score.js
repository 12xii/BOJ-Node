const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(fs[0]) * 3 + Number(fs[1]) * 2 + Number(fs[2])
const b = Number(fs[3]) * 3 + Number(fs[4]) * 2 + Number(fs[5])

if(a > b) console.log('A');
else if(a < b) console.log('B');
else console.log('T');