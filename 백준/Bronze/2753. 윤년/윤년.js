const fs = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split(' '))
if(fs%400==0) console.log('1');
else if(fs%100==0) console.log('0');
else if(fs%4==0) console.log('1');
else console.log('0');