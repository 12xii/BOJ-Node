const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on('line', function(line){
    input.push(line);
})
    .on('close', function(){
        const testCase = Number(input[0]);
        let arr = '';

        for(let i = 1 ; i <= testCase ; i++){
            const Case = input[i].split(' ');

            const lt = BigInt(Case[0]), wt = BigInt(Case[1]);
            const le = BigInt(Case[2]), we = BigInt(Case[3]);

            if(lt * wt > le * we) arr += 'TelecomParisTech\n';
            else if (lt * wt == le * we) arr += 'Tie\n';
            else arr += 'Eurecom\n';
        }

        console.log(arr);
        process.exit();
    })
