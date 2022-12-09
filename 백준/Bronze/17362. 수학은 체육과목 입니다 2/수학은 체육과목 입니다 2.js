const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const naturalNum = Number(fs);

if(naturalNum % 8 == 1) console.log('1');
else if(naturalNum % 8 == 5) console.log('5');
else if(naturalNum % 4 == 3) console.log('3');
else if(naturalNum % 8 == 2 || naturalNum % 8 == 0) console.log('2');
else console.log('4');

// 2 : 2, 8, 10, 16, ...  (+6, +2, +6, ...)
// 3 : 3, 7, 11, 15, ...  (+4, +4, +4, ...)
// 4 : 4, 6, 12, 14, ...  (+2, +6, +2, ...)