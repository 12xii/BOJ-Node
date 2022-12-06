const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const toSchool = Number(fs[0]), toPC = Number(fs[1]), toAcademy = Number(fs[2]), toHome = Number(fs[3]);

let sumSec = toSchool + toPC + toAcademy + toHome, summin = 0;

if(sumSec >= 60){
    summin += Math.floor(sumSec / 60);
    sumSec %= 60;
}

console.log(`${summin}\n${sumSec}`);