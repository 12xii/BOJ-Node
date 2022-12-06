const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = fs[1].split(' '), count = 0;

for(let i = 0 ; i < 5 ; i++){
    if(num[i] == fs[0]) count++;
}

console.log(count);