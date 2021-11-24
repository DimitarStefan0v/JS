function calculator() {
    let firstInput;
    let secondInput;
    let resultOutput;

    function init(firstSelector, secondSelector, thirdSelector) {
        firstInput = document.querySelector(firstSelector);
        secondInput = document.querySelector(secondSelector);
        resultOutput = document.querySelector(thirdSelector);
    }

    function add() {
        resultOutput.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultOutput.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return {
        init,
        add,
        subtract
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');