const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(fs[0]), b=Number(fs[1]), c=Number(fs[2]);
console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);