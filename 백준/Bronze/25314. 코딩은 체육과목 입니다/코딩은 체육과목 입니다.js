const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

let arr = '';
for(let i = 0 ; i < Number(fs)/4 ; i++){
    arr += 'long ';
}
console.log(arr + 'int');