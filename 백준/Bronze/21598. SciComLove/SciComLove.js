const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = '';

for(let i = 0 ; i < Number(fs) ; i++){
    arr += 'SciComLove\n';
}

console.log(arr);