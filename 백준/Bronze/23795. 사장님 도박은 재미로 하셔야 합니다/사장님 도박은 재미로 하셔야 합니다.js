const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = BigInt(1);
for(let i = 0 ; i < fs.length ; i++){
    sum += BigInt(fs[i]);
}

console.log(sum.toString().replace('n', ''));