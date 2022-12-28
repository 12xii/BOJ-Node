const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(fs);

let sum = 0;
const isHansu = (num) => {
    if(num < 100) return true ;
    else{
        const one = Math.floor(num / 100) - Math.floor(num / 10) % 10;
        const two = Math.floor(num / 10) % 10 - num % 10;
        if(one == two) return true;
        else return false;
    }
}

for(let i = 1 ; i <= N ; i++){
    if(isHansu(i)) sum++;
}

console.log(sum);