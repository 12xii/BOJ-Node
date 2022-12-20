const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let stat = 'S';
for(let i = 0 ; i < 8 ; i++){
    if(fs[i] == '9'){
        stat = 'F';
        break;
    }
}

console.log(stat);