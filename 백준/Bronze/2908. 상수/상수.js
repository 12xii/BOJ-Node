const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let one = fs[0].split(''), two = fs[1].split(''), temp = fs[0].split('');
let arrOne = '', arrTwo = '';
for(let i = 0 ; i < 3 ; i++){
    one[i] = two[2-i];
    arrOne += one[i];
}
for(let i = 0 ; i < 3 ; i++){
    two[i] = temp[2-i];
    arrTwo += two[i];
}
console.log(Number(arrOne) > Number(arrTwo) ? arrOne : arrTwo);