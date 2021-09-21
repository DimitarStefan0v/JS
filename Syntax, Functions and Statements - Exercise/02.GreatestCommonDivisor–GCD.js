function solve(numOne, numTwo){
    while (numTwo != 0){
        let temp = numTwo;
        numTwo = numOne % numTwo;
        numOne = temp;
    }
    return numOne;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));
console.log(solve(458, 2154));