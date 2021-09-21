function solve(stringArray) {
    let result = Number(stringArray[0]) + Number(stringArray[stringArray.length - 1]);
    return result;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));