const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let iswrong = ''

for(let i = 0 ; i < fs.length - 1 ; i++){
    const triangle = fs[i].split(' ');
    
    let arr = [Number(triangle[0]), Number(triangle[1]), Number(triangle[2])];
    arr.sort((x, y) => {
        return x - y;
    })

    const a = arr[0], b = arr[1], c = arr[2];

    if(a * a + b * b == c * c) iswrong += 'right\n'
    else iswrong += 'wrong\n';
}

console.log(iswrong);