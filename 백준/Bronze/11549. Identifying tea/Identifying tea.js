const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(fs[0]);
const user = fs[1].split(' ');
const teapot = [ Number(user[0]), Number(user[1]), Number(user[2]), Number(user[3]), Number(user[4])];
let count = 0;

for(let i = 0 ; i < 5 ; i++){
    if(teapot[i] == T) count++;
}

console.log(count);