const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = '';

for(let i=0;i<26;i++){
    for(let j=0;j<fs.length;j++){
        if(fs[j] == alpha[i]){
            arr += j + ' ';
            break;
        }else if(j == fs.length-1){
            arr+='-1 ';
        }
    }
}
console.log(arr);