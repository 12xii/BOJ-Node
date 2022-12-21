const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const antena = Number(fs[0]), eye = Number(fs[1]);
let vari = '';

if(antena >= 3 && eye <= 4) vari += 'TroyMartian\n';
if(antena <= 6 && eye >= 2) vari += 'VladSaturnian\n';
if(antena <= 2 && eye <= 3) vari += 'GraemeMercurian';

console.log(vari);