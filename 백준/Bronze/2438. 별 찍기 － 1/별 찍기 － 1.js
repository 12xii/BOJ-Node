const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(fs);
for(let i = 1; i <= a; i++){
    console.log('*'.repeat(i));
}