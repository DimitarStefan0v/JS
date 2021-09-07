function largestNum(numOne, numTwo, numThree){
    let maxNum = Math.max(Number(numOne), Number(numTwo), Number(numThree));
    console.log(`The largest number is ${maxNum}.`);
}

largestNum(5, -3, 16);

largestNum(-3, -5, -22.5);