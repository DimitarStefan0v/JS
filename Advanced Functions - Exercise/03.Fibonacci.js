function getFibonator() {
    let numberOne = 0;
    let numberTwo = 0;

    function getNumber() {
        if (numberOne == 0) {
            numberOne++;
            return 1;
        }

        if (numberTwo == 0) {
            numberTwo++;
            return 1;
        }

        const result = numberOne + numberTwo;
        numberOne = numberTwo;
        numberTwo = result;
        return result;
    }

    return getNumber;
}

let fib = getFibonator();
console.log(fib()); // 1 
console.log(fib()); // 1 
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 