const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(fs);
for(let i = 0 ; i < num ; i++){
    let arr = '';
    for(let j = num-i ; j > 1 ; j--){
        arr += ' ';
    }
    for(let j = 0 ; j <= i ; j++){
        arr += '*';
    }
    console.log(arr);
}