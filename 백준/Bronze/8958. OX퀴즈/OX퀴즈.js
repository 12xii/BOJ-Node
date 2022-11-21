const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1 ; i <= Number(fs[0]) ; i++){
    let arr = fs[i].split('');
    let sum = 0;
    for(let j = 0 ; j < arr.length ; j++){
        for(let o = 1; arr[j] == 'O' ; o++){
            sum += o;
            j++;
        }
    }
    console.log(sum);
}