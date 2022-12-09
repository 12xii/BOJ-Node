const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('/');

const K = Number(fs[0]), D = Number(fs[1]), A = Number(fs[2]);
if(K + A < D || D == 0) console.log('hasu');
else console.log('gosu');