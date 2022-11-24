const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const firdigit = 91;
const sum = Number(fs[0]) + Number(fs[1])*3 + Number(fs[2]) + firdigit;

console.log(`The 1-3-sum is ${sum}`);