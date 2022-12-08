const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const first = fs[0].split(' ');
const second = fs[1].split(' ');

let apple='', orange='', arr = '';
if(first[0] <= second[0]) apple = 'first';
else apple = 'second';
if(first[1] <= second[1]) orange = 'first';
else orange = 'second';

if(apple == orange){
    if(apple == 'first'){
        if(first[0] <= first[1]) arr += Number(first[0])+Number(second[1]);
        else arr += Number(first[1])+Number(second[0]);
    }else{
        if(second[0] <= second[1]) arr += Number(first[1])+Number(second[0]);
        else arr += Number(first[0])+Number(second[1]);
    }
}
else{
    if(apple == 'first'){
        arr += Number(first[0])+Number(second[1]);
    }else{
        arr += Number(first[1])+Number(second[0]);
    }
}

console.log(arr)