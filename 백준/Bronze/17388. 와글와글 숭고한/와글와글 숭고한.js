const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const S = Number(fs[0]), K = Number(fs[1]), H = Number(fs[2]);

if(S + K + H >= 100) console.log('OK');
else{
    if(S < K && S < H) console.log('Soongsil');
    else if(K < S && K < H) console.log('Korea');
    else console.log('Hanyang');
}