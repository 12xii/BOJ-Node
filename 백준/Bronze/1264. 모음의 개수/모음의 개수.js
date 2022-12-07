const fs = require('fs').readFileSync('/dev/stdin').toString().toLocaleLowerCase().trim().split('\n');

let odd = '';
for(let Case = 0 ; Case < fs.length ; Case++){
    if(fs[Case] == '#') break;
    const sentence = fs[Case].split('');
    let count = 0;
    for(let word = 0 ; word < sentence.length ; word++){
        switch(sentence[word]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
            default:
                break;
        }
    }
    odd += count + '\n';
}

console.log(odd);