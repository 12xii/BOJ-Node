const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;

for(let i = 2 ; i < Number(fs[1])+2 ; i++){
    let a = fs[i].split(' ');
    sum += Number(a[0]) * Number(a[1]);
}

if(Number(fs[0]) == Number(sum)) console.log('Yes');
else console.log('No')