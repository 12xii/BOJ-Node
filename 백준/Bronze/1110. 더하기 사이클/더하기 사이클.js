const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

let fir, sec, arr = fs, count = 0;
do{
    fir = Math.floor(Number(arr)/10), sec = Number(arr)%10;
    arr = sec*10 + (fir+sec)%10;
//    if(arr == fs) break;
    count++;
}while(arr != fs)
console.log(count);