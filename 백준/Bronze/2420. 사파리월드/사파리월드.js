const fs= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Math.abs(Number(fs[0]) - Number(fs[1])));