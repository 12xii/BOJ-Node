const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = fs[1].split(' ');
let count = 0;

for(let i = 0; i < Number(fs[1].length); i++){
    if(arr[i] == fs[2]) count++;
}

console.log(count);