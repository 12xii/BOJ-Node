let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

fs.sort((a, b) => {
    return a-b;
})

console.log(fs[1]);