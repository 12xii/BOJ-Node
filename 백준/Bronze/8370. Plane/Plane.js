const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const biz = Number(fs[0]) * Number(fs[1]);
const eco = Number(fs[2]) * Number(fs[3]);

console.log(biz+eco);