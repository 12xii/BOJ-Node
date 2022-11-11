const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(fs[0])+Number(fs[1]));
console.log(Number(fs[0])-Number(fs[1]));
console.log(Number(fs[0])*Number(fs[1]));
console.log(parseInt(Number(fs[0])/Number(fs[1])));
console.log(Number(fs[0])%Number(fs[1]));