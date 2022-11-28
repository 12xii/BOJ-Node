const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

if(Number(fs)%5 > 0){
    console.log(Math.floor(Number(fs)/5)+1)
}else console.log(Number(fs)/5);