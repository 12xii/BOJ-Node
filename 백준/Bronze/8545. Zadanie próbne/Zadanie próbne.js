const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const array = fs.split('');
let arr = []

for(let i = 0 ; i < 3 ; i++){
    arr.unshift(array[i]);
}

console.log(arr.toString().replaceAll(',',''));