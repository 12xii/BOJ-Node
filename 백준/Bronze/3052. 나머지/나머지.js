let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 1;

for(let i = 0 ; i < 10 ; i++){
    fs[i] %= 42;
}

for(let i = 0 ; i < 10 ; i++){
    for(let j = i+1 ; j < 10 ; j++){
        if(fs[i] == fs[j]){
            break;
        }
        if(j==9) count++;
    }
}

console.log(count);