const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let yorn = '';
for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const arr = fs[i].split('');
    if(arr.length >= 6 && arr.length <= 9) yorn += 'yes\n';
    else yorn += 'no\n';
}
console.log(yorn);