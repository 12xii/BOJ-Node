const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(fs[0]) * Number(fs[1]) * Number(fs[2]);
const arr = num.toString().split('');

let list = [0];
for(let i = 0 ; i < 10 ; i++) list[i] = 0;
for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < 10 ; j++){
        if(Number(arr[i]) == j){
            list[j]++;
            break;
        }
    }
}

for(let i = 0 ; i < 10 ; i++){
    console.log(list[i]);
}