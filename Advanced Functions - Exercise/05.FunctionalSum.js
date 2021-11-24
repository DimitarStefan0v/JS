function add(number) {
    let sum = number;

    function increase(secondNumber) {
        sum += secondNumber;
        return increase;
    }

    increase.toString = () => sum;

    return increase;
}

console.log(add(1)(6)(-3).toString());