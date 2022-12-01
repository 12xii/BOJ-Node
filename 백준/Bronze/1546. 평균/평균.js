const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = fs[1].split(' '), Max = 0, sum = 0;
for(let i = 0 ; i < Number(fs[0]) ; i++){
    Max = Max < Number(num[i]) ? Number(num[i]) : Max;
}

for(let i = 0 ; i < Number(fs[0]) ; i++){
    num[i] = Number(num[i]) / Max * 100;
    sum += num[i];
}

console.log(sum/Number(fs[0]));