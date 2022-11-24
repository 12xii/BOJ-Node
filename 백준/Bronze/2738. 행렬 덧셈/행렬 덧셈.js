const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = fs[0].split(' ');

for(let i = 1 ; i <= Number(num[0]) ; i++){
    let hap = '';
    let a = fs[i].split(' ')
    let b = fs[i+Number(num[0])].split(' ');

    for(let j = 0 ; j < Number(num[1]) ; j++){
        hap += (Number(a[j]) + Number(b[j])) + ' ';
    }
    console.log(hap)
}