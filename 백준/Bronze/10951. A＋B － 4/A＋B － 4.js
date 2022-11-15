const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;

while(i < fs.length){
    let arr = fs[i].split(' ').map( n => Number(n));
    console.log(arr[0]+arr[1]);
    i++;
}