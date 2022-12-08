const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = fs[0].split(' '), B = fs[1].split(' '), C = fs[2].split(' ');

let Ahour = [0, 0, 0], Bhour = [0, 0, 0], Chour = [0, 0, 0];
for(let i = 2 ; i >= 0 ; i--){
    Ahour[i] += Number(A[i+3]) - Number(A[i]);
    if(Ahour[i] < 0) Ahour[i] += 60, Ahour[i-1] -= 1;
    Bhour[i] += Number(B[i+3]) - Number(B[i]);
    if(Bhour[i] < 0) Bhour[i] += 60, Bhour[i-1] -= 1;
    Chour[i] += Number(C[i+3]) - Number(C[i]);
    if(Chour[i] < 0) Chour[i] += 60, Chour[i-1] -= 1;
}

console.log(Ahour[0], Ahour[1], Ahour[2]);
console.log(Bhour[0], Bhour[1], Bhour[2]);
console.log(Chour[0], Chour[1], Chour[2]);