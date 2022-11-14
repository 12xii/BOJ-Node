const fs = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split(' '))
let sum=0;
for(let i=1;i<=fs;i++){
    sum+=i;
}
console.log(sum);