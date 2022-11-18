const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [0];
for(let i = 0; i <= fs.length ; i++){
    arr[Number(fs[i])] = fs[i];
}

for(let i = 0 ; i <= 30; i++){
    if(arr[i]==undefined) console.log(i);
}