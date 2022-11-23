const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = ''
for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const plus = fs[i].split(' ');
    const sum = Number(plus[0]) + Number(plus[1]);

    arr += sum + '\n';
}

console.log(arr);