function calc(input) {
    let sum = 0;
    let iterator = '' + input;
    let isSameValue = true;
    for (let i = 0; i < iterator.length; i++) {
        sum += Number(iterator[i]);
        if (i < iterator.length - 1 && (iterator[i] != iterator[i + 1])) {
            isSameValue = false;
        }
    }

    console.log(isSameValue);
    console.log(sum);
}

calc(2222222);
calc(1234);