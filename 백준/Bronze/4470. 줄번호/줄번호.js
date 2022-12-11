const fs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = '';
for(let i = 1 ; i <= Number(fs[0]) ; i++){
    arr += i + '. ' + fs[i] + '\n';
}
console.log(arr);