const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const N = Number(fs[0]), M = Number(fs[1]);

if(N < M){
    console.log(Math.floor(N / 2))
}else{
    console.log(Math.floor(M / 2))
}