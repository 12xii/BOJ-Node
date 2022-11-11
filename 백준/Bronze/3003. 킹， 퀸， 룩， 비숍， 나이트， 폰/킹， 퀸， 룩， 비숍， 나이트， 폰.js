// 1 1 2 2 2 8
const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(`${1-Number(fs[0])} ${1-Number(fs[1])} ${2-Number(fs[2])} ${2-Number(fs[3])} ${2-Number(fs[4])} ${8-Number(fs[5])}`);