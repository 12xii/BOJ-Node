let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
for(let i = 0 ; i < fs.length ; i++){
    if(Number(fs[i]) < 40) fs[i] = 40;
    sum += Number(fs[i]);
}

console.log(sum/fs.length);