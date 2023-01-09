let fs = require('fs').readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const count = (line) => {
    for(let i of croatia){
        fs = fs.split(i).join('A');
    }
    return fs.length;
}

console.log(count(fs));