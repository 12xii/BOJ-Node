const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = Number(fs);
for(let i=1;i<=9;i++){
    console.log(input + ' * ' + i + ' = ' + input*i);
}