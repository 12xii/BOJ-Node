const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

let time = Number(fs);
const a = 300, b = 60, c = 10;

let pushA = 0, pushB = 0, pushC = 0, arr = '-1';

if(time % c != 0){
    arr = '-1';
}
else{    
    if(Math.floor(time / a) >= 1){
        pushA = Math.floor(time / a);
        time %= a;
    }
    
    if(Math.floor(time / b) >= 1){
        pushB = Math.floor(time / b);
        time %= b;
    }
    
    if(Math.floor(time / c) >= 1){
        pushC = Math.floor(time / c);
        time %= c;
    }

    arr = `${pushA} ${pushB} ${pushC}`;
}

console.log(arr)