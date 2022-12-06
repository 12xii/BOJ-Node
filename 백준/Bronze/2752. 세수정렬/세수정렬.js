let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

for(let i = 0 ; i < 3 ; i++){
    fs[i] = Number(fs[i]);
}

let arr = fs.sort(function(a, b){return a-b}).toString().replaceAll(',', ' ');

console.log(arr);