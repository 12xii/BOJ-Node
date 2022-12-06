const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const vacation = Number(fs[0]);
const KoreanFor = Number(fs[1]), KoreanADay = Number(fs[3]);
const MathFor = Number(fs[2]), MathADay = Number(fs[4]);

if(Math.ceil(KoreanFor / KoreanADay) >= Math.ceil(MathFor / MathADay)){
    console.log(vacation - Math.ceil(KoreanFor / KoreanADay));
}else{
    console.log(vacation - Math.ceil(MathFor / MathADay));
}