function Kaprekar(n) {
    let num = n, result = 0;

    for (let i = 0; i < String(n).length; i++) {
        result += Number(num) % 10;
        num = Math.floor(num / 10);
    }
    return n + result;
}

let arr = Array(10001).fill(true);

for (let i = 0; i <= 10000; i++) {
    arr[Kaprekar(i)] = false;
}

for (let i = 0; i < 10000; i++) {
    if (arr[i]) {
        console.log(i);
    }
}