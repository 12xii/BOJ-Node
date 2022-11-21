const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

if(fs.length == 1 && fs[0] == '') console.log('0');
else console.log(fs.length);