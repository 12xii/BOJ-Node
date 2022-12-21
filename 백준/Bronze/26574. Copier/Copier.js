const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Testcase = Number(fs[0]);

for(let i = 1 ; i <= Testcase ; i++){
    console.log(`${fs[i]} ${fs[i]}`);
}