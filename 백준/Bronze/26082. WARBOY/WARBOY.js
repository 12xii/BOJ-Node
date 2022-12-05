const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const VSprice = Number(fs[0]), VScan = Number(fs[1]);
const WARBOY = Number(fs[2]);

console.log(VScan / VSprice * WARBOY * 3);