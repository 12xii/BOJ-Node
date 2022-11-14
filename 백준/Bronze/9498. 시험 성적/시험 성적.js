const j = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
if(j<=100 && j>=90) console.log('A');
else if(j>=80 && j<90) console.log('B');
else if(j>=70 && j<80) console.log('C');
else if(j>=60 && j<70) console.log('D');
else console.log('F');