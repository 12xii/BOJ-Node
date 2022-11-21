const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let score = 0;

if(fs[0] == 'A') score = 4
else if(fs[0] == 'B') score = 3
else if(fs[0] == 'C') score = 2
else if(fs[0] == 'D') score = 1;

if(fs[1] == '+') score += 0.3
else if(fs[1] == '-') score -= 0.3;

console.log(score.toFixed(1));