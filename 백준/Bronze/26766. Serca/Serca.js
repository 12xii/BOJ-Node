const fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(fs);
let arr = '';
for(let i = 0 ; i < num ; i++){
    arr += ' @@@   @@@ \n'
    arr += '@   @ @   @\n'
    arr += '@    @    @\n'
    arr += '@         @\n'
    arr += ' @       @ \n'
    arr += '  @     @  \n'
    arr += '   @   @   \n'
    arr += '    @ @    \n'
    arr += '     @     \n'
}

console.log(arr);