const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '';
for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const line = fs[i].split(' ');
    arr += (BigInt(line[0]) + BigInt(line[1])) + '\n';
}

console.log(arr.replaceAll('n', ''));