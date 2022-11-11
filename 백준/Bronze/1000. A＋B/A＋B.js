const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(input[0])+Number(input[1]));