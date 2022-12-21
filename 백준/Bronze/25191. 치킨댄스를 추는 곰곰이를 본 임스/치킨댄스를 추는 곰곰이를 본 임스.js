const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const chick = Number(fs[0]), line = fs[1].split(' ');
const coke = Number(line[0]), beer = Number(line[1]);

if(Math.floor(coke / 2) + beer >= chick) console.log(chick);
else if(Math.floor(coke / 2) + beer <= chick) console.log(Math.floor(coke / 2) + beer);