const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const first = fs[0].split(' ');
const second = fs[1].split(' ');

const people = Number(first[0]) * Number(first[1]);
let arr = '';

for(let i = 0 ; i < 5 ; i++){
    arr += Number(second[i])-people + ' ';
}

console.log(arr);