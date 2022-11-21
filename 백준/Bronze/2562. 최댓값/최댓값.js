const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let Max = 0, maxNum;
for(let i = 0 ; i < fs.length ; i++){
    if(Max<Number(fs[i])){
        Max = Number(fs[i]);
        maxNum = i+1;
    }
}

console.log(Max);
console.log(maxNum);