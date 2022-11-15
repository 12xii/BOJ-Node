const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1;i<=fs[0];i++){
    let num = fs[i].split(' ');
    console.log( 'Case #' + i + ': ' + (Number(num[0]) + Number(num[1])))
}