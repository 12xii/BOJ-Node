const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const newbie = Number(fs[0]), amI = Number(fs[1]);

if(2 >= amI) console.log('NEWBIE!');
else if(newbie >= amI && amI>2) console.log('OLDBIE!');
else console.log('TLE!');