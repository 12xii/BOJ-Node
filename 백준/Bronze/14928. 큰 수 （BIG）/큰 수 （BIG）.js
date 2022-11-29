const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = BigInt(fs);
let arr = '';
arr += num%BigInt(20000303);

console.log(arr);