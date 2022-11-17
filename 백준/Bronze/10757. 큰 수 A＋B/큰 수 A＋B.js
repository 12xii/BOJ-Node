const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let arr = BigInt(fs[0]) + BigInt(fs[1]);
let rep = /n/;
console.log(arr.toString().replace(rep, ""));