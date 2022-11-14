const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(fs[0]), b = Number(fs[1]);
if(a>b) console.log('>');
else if(a<b) console.log('<');
else console.log('==');