const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = fs[0].split(' '), c = fs[1].split(' ');
let arr = '';

arr += Number(c[0])-Number(a[2]) + ' ';
arr += Number(c[1])/Number(a[1]) + ' ';
arr += Number(c[2])-Number(a[0]);

console.log(arr)