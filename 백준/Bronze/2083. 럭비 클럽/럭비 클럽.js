const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = '';
for(let i = 0 ; i < fs.length - 1 ; i++){
    const user = fs[i].split(' ');
    const name = user[0], age = Number(user[1]), weight = Number(user[2]);
    if(age > 17 || weight >= 80) arr += name + ' Senior\n';
    else arr += name + ' Junior\n';
}

console.log(arr);