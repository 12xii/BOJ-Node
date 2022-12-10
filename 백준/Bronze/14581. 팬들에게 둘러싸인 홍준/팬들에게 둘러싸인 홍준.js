const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const fan = ':fan:';

console.log(fan + fan + fan)
console.log(fan + ':' + fs + ':' + fan)
console.log(fan + fan + fan);