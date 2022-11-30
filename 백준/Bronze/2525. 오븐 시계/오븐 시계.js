const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const now = fs[0].split(' ');
let arr = '';
const hour = Math.floor(parseInt(fs[1])/60), nam = Number(fs[1])%60;
let midnight = Number(now[0])+hour+1;
if(Number(now[1]) + nam >= 60){
    if(midnight >= 24 || hour+midnight >= 24) midnight %= 24;
    arr += midnight + ' ';
    arr += (Number(now[1])+nam)%60;
}else{
    if(hour+midnight >= 24)
    if(midnight-1 >= 24) midnight %= 24;
    arr += midnight-1 + ' ';
    arr += Number(now[1])+nam;
}
console.log(arr);