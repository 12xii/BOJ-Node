const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let num = 0;
for(let i = 0 ; i < 5 ; i++){
    num += Number(fs[i])**2;
}

console.log(num % 10);