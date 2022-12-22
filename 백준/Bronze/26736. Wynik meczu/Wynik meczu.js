const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let Algoorod = 0, Byteotia = 0;

for(let i = 0 ; i < fs.length ; i++){
    if(fs[i] == 'A') Algoorod++;
    else if(fs[i] == 'B') Byteotia++;
}

console.log(`${Algoorod} : ${Byteotia}`);