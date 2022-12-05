const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = Number(fs[0]), B = Number(fs[1]), C = Number(fs[2]);
let set = -50;

if(A <= B && A <= C) set += A;
else if(B <= A && B <= C) set += B;
else set += C;

if(Number(fs[3]) <= Number(fs[4])) set += Number(fs[3]);
else set += Number(fs[4]);

console.log(set);