const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1 ; i < fs.length ; i++){
    console.log(`Case ${i}: Sorting... done!`);
}