function solve(numbers) {
    let result = [];
    for(let i = numbers.length - 1; i >= 0; i--){
        if (i % 2 == 1){
            result.push(numbers[i] * 2);
        }
    }

    return result.join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));