const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const jango = fs[0].split(' '), chicken = Number(fs[1]);

if(Number(jango[0]) + Number(jango[1]) >=  chicken * 2) console.log(Number(jango[0]) + Number(jango[1]) - chicken * 2);
else console.log(Number(jango[0]) + Number(jango[1]));