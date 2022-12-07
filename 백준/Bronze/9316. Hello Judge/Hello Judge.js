const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

for(let i = 1 ; i <= Number(fs) ; i++){
    console.log(`Hello World, Judge ${i}!`);
}