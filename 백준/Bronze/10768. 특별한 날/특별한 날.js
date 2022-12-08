const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const month = Number(fs[0]), date = Number(fs[1]);

if(month < 2) console.log('Before');
else if(month == 2){
    if(date < 18) console.log('Before');
    else if(date == 18) console.log('Special');
    else console.log('After');
}
else console.log('After');