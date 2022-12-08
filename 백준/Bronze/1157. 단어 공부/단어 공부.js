const fs = require('fs').readFileSync('/dev/stdin').toString().toUpperCase().trim().split('');

let count = [], arr = '';
for(let i = 0 ; i < 26 ; i++) count[i] = 0;

for(let i = 0 ; i < fs.length ; i++){
    count[fs[i].charCodeAt()-65]++;
}

let max=0;

for(let i = 0 ; i < 26 ; i++){
    if(max == count[i]){
        arr = '?';
    }
    if(max<count[i]){
        max = count[i];
        arr = String.fromCharCode(i+65);
    }
}

console.log(arr);