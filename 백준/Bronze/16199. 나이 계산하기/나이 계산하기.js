const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Birth = fs[0].split(' ');
const now = fs[1].split(' ');

if(Number(now[1]) == Number(Birth[1])){ // 만나이
    if(Number(now[2]) >= Number(Birth[2])) console.log(Number(now[0]) - Number(Birth[0]));
    else console.log(Number(now[0]) - Number(Birth[0]) - 1);
}else if(Number(now[1]) > Number(Birth[1])){ // 만나이
    console.log(Number(now[0]) - Number(Birth[0]));
}else console.log(Number(now[0]) - Number(Birth[0]) - 1)
console.log(Number(now[0]) - Number(Birth[0]) + 1); // 세는나이
console.log(Number(now[0]) - Number(Birth[0])); // 연나이