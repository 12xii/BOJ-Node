const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr = '';
for(let i = 0 ; i < fs.length ; i++){
    if(fs[i].charCodeAt() <= 90 && fs[i].charCodeAt() >= 65) fs[i] = fs[i].toLowerCase();
    else fs[i] = fs[i].toUpperCase();
    arr += fs[i];
}

console.log(arr);