const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

function check(group){
    let same = [];
    for(let j = 0 ; j < group.length ; j++){
        for(let k = j+1 ; k < group.length ; k++){
            if(same.includes(group[k]) && group[j] !== group[k]){
                return false;
            }
            same.push(group[j]);
            break;
        }
    }
    return true;
}

for(let i = 1 ; i <= Number(fs[0]) ; i++){
    const group = fs[i].split('');
    let s = check(group);
    if(s) count++; 
}

console.log(count);