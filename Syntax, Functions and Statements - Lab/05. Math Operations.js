function solve(numOne, numTwo, operator) {
    switch (operator) {
        case '+':
            console.log(numOne + numTwo);
            break;
        case '-':
            console.log(numOne - numTwo);
            break;
        case '*':
            console.log(numOne * numTwo);
            break;
        case '/':
            console.log(numOne / numTwo);
            break;
        case '%':
            console.log(numOne % numTwo);
            break;
        case '**':
            console.log(numOne ** numTwo);
            break;
    }
}

solve(5, 6, '+');
solve(3, 5.5, '*');