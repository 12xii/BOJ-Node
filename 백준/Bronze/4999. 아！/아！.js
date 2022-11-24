const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Jae = fs[0].length;
const doc = fs[1].length;

if(Jae >= doc) console.log('go');
else console.log('no');