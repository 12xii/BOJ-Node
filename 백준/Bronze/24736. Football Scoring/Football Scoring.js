const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const trip = fs[0].split(' '), home = fs[1].split(' ');

console.log(Number(trip[0]) * 6 + Number(trip[1]) * 3 + Number(trip[2]) * 2 + Number(trip[3]) + Number(trip[4]) * 2, 
Number(home[0]) * 6 + Number(home[1]) * 3 + Number(home[2]) * 2 + Number(home[3]) + Number(home[4]) * 2);