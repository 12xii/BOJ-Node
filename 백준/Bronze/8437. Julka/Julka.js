const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const SUM = BigInt(fs[0]);
const Claudia = BigInt(fs[1]);

let forClaudia = '', forNatallia = '';
forClaudia = ((SUM - Claudia) / BigInt(2) + Claudia).toString();
forNatallia = ((SUM - Claudia) / BigInt(2)).toString();

forClaudia.split('').pop().toString();
forNatallia.split('').pop().toString();

console.log(forClaudia + '\n' + forNatallia);