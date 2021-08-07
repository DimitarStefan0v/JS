function solve(firstNum, secondNum, operator) {
    let result;
    switch (operator){
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');
solve(5, 2, '%');
solve(5, 2, '**');