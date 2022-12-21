const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = '';

for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const line = fs[i].split(' ');
    const dogs = Number(line[0]), found = Number(line[1]), price = Number(line[2]);

    arr += '$' + (dogs * found * price).toFixed(2) + '\n';
}

console.log(arr);