const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

if(fs[0] == fs[1]) console.log('1');
else console.log('0');