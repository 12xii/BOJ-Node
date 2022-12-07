const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '';
for(let i = 0 ; i < fs.length-1 ; i++){
    const reversefs = fs[i].split('');
    for(let j = reversefs.length-1 ; j >= 0 ; j--) arr += reversefs[j];
    arr += '\n';
}

console.log(arr);