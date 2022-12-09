const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr = fs, sum = 0;
for(let i = 0 ; i < fs.length ; i++) arr[i] = Number(arr[i]);
for(let i = 0 ; i < fs.length ; i++){
    if(arr[i] == '0'){
        arr[i-1] *= 10;
    }
}
for(let i = 0 ; i < fs.length ; i++) sum += arr[i];

console.log(sum);