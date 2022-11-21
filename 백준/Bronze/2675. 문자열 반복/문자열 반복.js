const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1 ; i <= Number(fs[0]) ; i++){
    let arr = '';
    let num = fs[i].split(' ');
    let ar = num[1].split('');
    for(let j = 0 ; j < ar.length ; j++){
        for(let k = 0 ; k < Number(num[0]); k++){
            arr += ar[j];
        }
    }
    console.log(arr)
}