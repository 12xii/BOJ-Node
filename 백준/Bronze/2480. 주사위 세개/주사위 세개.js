const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(fs[0]), b = Number(fs[1]), c = Number(fs[2]);
let gold = 0;
if(a==b && b==c) gold += 10000 + a*1000;
else if (a==b || a==c) gold += 1000 + a*100;
else if (b==c) gold += 1000 + b*100;
else{
    if(a>b && a>c) gold += a*100;
    else if(b>a && b>c) gold += b*100;
    else if(c>a && c>b) gold += c*100;
}
console.log(gold); 