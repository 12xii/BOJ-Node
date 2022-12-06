const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const minkukk = fs[0].split(' ');
const manse = fs[1].split(' ');

let summinkukk = 0, summanse = 0;
for(let i = 0 ; i < 4 ; i++){
    summinkukk += Number(minkukk[i]);
    summanse += Number(manse[i]);
}

if(summinkukk >= summanse) console.log(summinkukk);
else console.log(summanse);