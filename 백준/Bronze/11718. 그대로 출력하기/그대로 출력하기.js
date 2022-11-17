const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0;i<fs.length;i++){
    console.log(fs[i]);
}