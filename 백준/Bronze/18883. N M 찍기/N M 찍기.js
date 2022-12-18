const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = Number(fs[0]), M = Number(fs[1]);
let arr = '', count = 1;

for(let i = 1 ; i <= N ; i++){
    arr += count++;
    for(let j = 1 ; j < M ; j++){
        arr += ' ' + count++;
    }
    arr += '\n';
}

console.log(arr);