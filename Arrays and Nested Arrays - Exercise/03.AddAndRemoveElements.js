function solve(array) {
    let result = [1];
    for (const operation of array) {
        if (operation == 'add'){
            result.push(result[result.length - 1] + 1);
        } else if (operation == 'remove') {
            result.pop();
        }
    }

    if (result < 1) {
        console.log('Empty');
    } else {
        console.log();
    }
}