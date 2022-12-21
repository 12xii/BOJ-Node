const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(fs.length);