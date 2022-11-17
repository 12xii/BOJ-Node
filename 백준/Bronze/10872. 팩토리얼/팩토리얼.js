const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

let a = 1;
for(let i=Number(fs); i>1;i--){
    a *= i;
}

console.log(a);