const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let a = 0;
do{
    let i = fs[a].split(' ');
    a++;
    console.log(Number(i[0])+Number(i[1]));
}while(fs[a]!='0 0');