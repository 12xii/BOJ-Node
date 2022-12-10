const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '';
for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const first = fs[i].split('');

    arr += first[0] + first[first.length-1] + '\n';
}

console.log(arr);