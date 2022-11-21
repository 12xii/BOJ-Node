const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = fs[1].split(' ');

let Max = -1000000;
let min = 100000;

for(let i = 0 ; i < Number(fs[0]) ; i++){
    if(Number(arr[i]) < min) min = arr[i];
    if(Number(arr[i]) > Max) Max = arr[i];
}

console.log(min, Max);