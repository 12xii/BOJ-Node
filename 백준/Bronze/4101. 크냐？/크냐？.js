const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0 ; fs[i] != '0 0'; i++){
    const a = fs[i].split(' ');
    if(Number(a[0]) > Number(a[1])) console.log('Yes');
    else console.log('No');
}