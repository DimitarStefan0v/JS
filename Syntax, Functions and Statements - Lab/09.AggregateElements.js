function calc(array) {
    const reducerOne = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(reducerOne));
    let inverseSum = 0;
    array.forEach(element => {
            inverseSum += 1 / element;
    });
    console.log(inverseSum);
    let concatResult = '';
    array.forEach(element => {
        concatResult += element;
    });
    console.log(concatResult);
}

calc([1, 2, 3]);