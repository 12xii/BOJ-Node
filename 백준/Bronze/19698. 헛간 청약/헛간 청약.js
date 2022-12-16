const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const cow = Number(fs[0]), Width = Number(fs[1]), Height = Number(fs[2]), L = Number(fs[3]);
const print = Math.floor(Width / L) * Math.floor(Height / L);

if(print > cow) console.log(cow);
else console.log(print);