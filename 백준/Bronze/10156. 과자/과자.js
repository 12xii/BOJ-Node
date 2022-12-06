const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const price = Number(fs[0]), many = Number(fs[1]), have = Number(fs[2]);
let recive = 0;

if(price * many > have){
    recive = price * many - have;
}
console.log(recive);