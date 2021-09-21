function calc(numOne, numTwo, operator) {
    if (Number.isFinite(numOne) && Number.isFinite(numTwo)) {
        let result;
        switch (operator) {
            case '+':
                result = numOne + numTwo;
                break;
            case '-':
                result = numOne - numTwo;
                break;
            case '*':
                result = numOne * numTwo;
                break;
            case '/':
                result = numOne / numTwo;
                break;
            case '%':
                result = numOne % numTwo;
                break;
            case '**':
                result = numOne ** numTwo;
                break;
        }
        console.log(result)
    }
}

calc(5, 6, '+');
calc(3, 5.5, '*');