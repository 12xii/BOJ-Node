const fs = require('fs').readFileSync(0).toString().trim().split('\n');

if(fs[0]>0 && fs[1]>0) console.log('1');
else if(fs[0]<0 && fs[1]>0) console.log('2');
else if(fs[0]<0 && fs[1]<0) console.log('3');
else if(fs[0]>0 && fs[1]<0) console.log('4');