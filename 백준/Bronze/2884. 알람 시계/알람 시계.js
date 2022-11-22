const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let h = Number(fs[0]), m = Number(fs[1]);

if(m-45 < 0){
    if(h-1 < 0) h = 23;
    else h -= 1;
    m += 15;
}else{
    m -= 45;
}

console.log(`${h} ${m}`);