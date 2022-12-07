const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '';
for(let Case = 0 ; Case < fs.length ; Case++){
    const friends = fs[Case].split(' ');
    if(friends[0] == '0' && friends[1] == '0') break;
    arr += Number(friends[0])+Number(friends[1]) + '\n';
}

console.log(arr)