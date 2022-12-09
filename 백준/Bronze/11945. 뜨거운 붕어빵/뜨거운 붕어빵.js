const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const bigger = fs[0].split(' ');
let arr = '';

for(let i = 0 ; i < Number(bigger[0]) ; i++){
    if(fs[i+1] == null) break;
    const line = fs[i+1].split('');
    arr += line.reverse() + '\n';
}

console.log(arr.replaceAll(',', ''));