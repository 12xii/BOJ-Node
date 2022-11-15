const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = fs[0].split(' ');
const nums = fs[1].split(' ');
let arr = '';

for(let i = 0 ; i < Number(num[0]) ; i++){
    if(parseInt(nums[i])<parseInt(num[1])) arr += nums[i] + ' ';
}
console.log(arr);