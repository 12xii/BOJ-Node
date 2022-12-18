const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const UR = Number(fs[0]), TR = Number(fs[1]), UO = Number(fs[2]), TO = Number(fs[3]);
console.log(UR * 56 + TR * 24 + UO * 14 + TO * 6);