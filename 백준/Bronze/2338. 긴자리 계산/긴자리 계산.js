const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);

let arr = ''

arr += fs[0] + fs[1] + '\n'
arr += fs[0] - fs[1] + '\n'
arr += fs[0] * fs[1] + '\n'

console.log(arr)