const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const x = Number(fs[0]), y = Number(fs[1]), w = Number(fs[2]), h = Number(fs[3]);

if(x < w - x){
    if(y < h - y){
        console.log(x < y ? x : y);
    }else{
        console.log(x < h - y ? x : h - y);
    }
}else{
    if(y < h- y){
        console.log(w - x < y ? w - x : y);
    }else{
        console.log(w - x < h - y ? w - x : h - y);
    }
}