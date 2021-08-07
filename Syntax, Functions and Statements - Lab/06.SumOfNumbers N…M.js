function calcSum(numOne, numTwo) {
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    let sum = 0;
    for (let start = numOne; start <= numTwo; start++) {
        sum += start;
    }

    return sum;
}

console.log(calcSum('1', '5'));
console.log(calcSum('-8', '20'));