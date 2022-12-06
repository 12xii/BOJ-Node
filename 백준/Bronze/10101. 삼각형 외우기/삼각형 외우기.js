const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(fs[0]), b = Number(fs[1]), c = Number(fs[2]);

if(a == b && b == c) console.log('Equilateral');
else if((a + b + c) == 180){
    if(a == b || b == c) console.log('Isosceles');
    else if (a == c) console.log('Isosceles');
    else console.log('Scalene');
}
else console.log('Error');