const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const R = Number(fs[0]), C = Number(fs[1]), N = Number(fs[2]);

if(R % N == 0 && C % N == 0){
    console.log(Math.floor(R / N) * Math.floor(C / N));
}else if(R % N == 0 && C % N != 0){
    console.log(Math.floor(R / N) * (Math.floor(C / N) + 1));
}else if(R % N != 0 && C % N == 0){
    console.log((Math.floor(R / N) + 1) * Math.floor(C / N));
}else{
    console.log((Math.floor(R / N) + 1) * (Math.floor(C / N) + 1));
}