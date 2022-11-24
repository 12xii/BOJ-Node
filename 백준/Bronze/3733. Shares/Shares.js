const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0 ; i < fs.length ; i++){
    let a = fs[i].split(' ');
    let num = Number(a[0]) + 1
    console.log(Math.floor(Number(a[1])/num));
}