const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr = [];
for(let i = 0 ; i < 26 ; i++) arr[i] = 0;
for(let i = 0 ; i < fs.length ; i++){
    arr[fs[i].charCodeAt()-97]++;
}

let print = ''
for(let i = 0 ; i < 26 ; i++){
    print += arr[i] + ' ';
}

console.log(print);