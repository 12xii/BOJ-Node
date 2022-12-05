const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = Number(fs);

let arr = '';
for(let i = num ; i > 0 ; i--){
    for(let j = i ; j > 0 ; j--){
        arr += '*';
    }
    arr += '\n';
}

console.log(arr);