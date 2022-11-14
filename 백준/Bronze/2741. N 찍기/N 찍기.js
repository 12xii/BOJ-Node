const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const num = Number(fs);
let out = '';
for(let i=1;i<=num;i++){
    out += i + '\n';
}
console.log(out);