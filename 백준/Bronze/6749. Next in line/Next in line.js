const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const young = Number(fs[0]), middle = Number(fs[1]);

console.log(middle+(middle-young));