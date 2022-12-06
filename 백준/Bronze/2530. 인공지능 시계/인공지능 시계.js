const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const now = fs[0].split(' ');
const nowhour = Number(now[0]), nowmin = Number(now[1]), nowsec = Number(now[2]);
let plus = Number(fs[1]), plusmin = 0, plushour = 0;

if(plus >= 60){
    plusmin = Math.floor(plus / 60);
    plus = plus % 60;
    if(plusmin >= 60){
        plushour = Math.floor(plusmin / 60);
        plusmin = plusmin % 60;
    }
}

if(nowsec + plus >= 60){
    plusmin += Math.floor((nowsec + plus) / 60);
    plus -= Math.floor((nowsec + plus) / 60) * 60;
}
if(nowmin + plusmin >= 60){
    plushour += Math.floor((nowmin + plusmin) / 60);
    plusmin -= Math.floor((nowmin + plusmin) / 60) * 60;
}
while(nowhour + plushour >= 24){
    plushour -= 24;
}

console.log(nowhour+plushour, nowmin+plusmin, nowsec+plus);