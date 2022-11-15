const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1 ; i<=fs[0]; i++){
    let arr = fs[i].split(' ');
    console.log(Number(arr[0])+Number(arr[1]));
}