function solve(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    let inverseSum = 0;
    for(let i = 0; i < array.length; i++){
        inverseSum += 1 / array[i];
    }

    let string = '';
    for(let i = 0; i < array.length; i++){
        string += array[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(string);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);