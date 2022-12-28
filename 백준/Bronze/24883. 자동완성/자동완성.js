const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

if(fs == 'N' || fs == 'n') console.log('Naver D2');
else console.log('Naver Whale')