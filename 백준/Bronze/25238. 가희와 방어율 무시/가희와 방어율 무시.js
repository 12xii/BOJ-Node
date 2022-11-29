const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const monster = Number(fs[0]);
const ignore = Number(fs[1]);

if( monster - ( monster / 100 * ignore ) < 100 ) console.log(1)
else console.log(0);