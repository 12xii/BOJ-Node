const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const mulli = Number(fs[0]), chemical = Number(fs[1]), saengmul = Number(fs[2]), earth = Number(fs[3]);
const history = Number(fs[4]), jiri = Number(fs[5]);

let max = 0;
if(mulli + chemical + saengmul > max) max = mulli + chemical + saengmul;
if(mulli + chemical + earth > max) max = mulli + chemical + earth;
if(mulli + saengmul + earth > max) max = mulli + saengmul + earth;
if(chemical + saengmul + earth > max) max = chemical + saengmul + earth;

if(history >= jiri) max += history;
else max += jiri;

console.log(max);