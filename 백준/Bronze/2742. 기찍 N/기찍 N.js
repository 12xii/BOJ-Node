const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(fs);
let arr = ''
for(let i = num ; i > 0 ; i-- ){
    arr += i + '\n';
}
console.log(arr)