const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

if(fs == '0') console.log('YONSEI');
else console.log('Leading the Way to the Future');