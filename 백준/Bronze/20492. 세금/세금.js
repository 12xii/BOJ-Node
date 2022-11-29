const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(fs);

let arr = '';
arr += N-N*22/100 + ' ';
arr += N-N*20/100*22/100;

console.log(arr)