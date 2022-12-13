const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(fs[0]);
for(let i = 1 ; i <= num ; i++){
    console.log(fs[i].toLocaleLowerCase());
}