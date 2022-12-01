const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Case = Number(fs[0]);
let perarr = '';

for(let i = 1 ; i <= Case ; i++){
    let score = 0, sum = 0;
    student = fs[i].split(' ');
    for(let j = 1 ; j <= Number(student[0]) ; j++)
        score += Number(student[j]);
    for(let j = 1 ; j <= Number(student[0]) ; j++){
        if(score/Number(student[0]) < student[j]) {
            sum++;
        }
    }
    perarr += (sum/student[0]*100).toFixed(3) + '%\n';
}
console.log(perarr);