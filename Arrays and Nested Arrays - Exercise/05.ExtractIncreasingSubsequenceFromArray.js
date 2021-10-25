// function solve(input) {
//     let currentBiggest = 0;
//     let result = [];

//     for (const element of input) {
//         if (element >= currentBiggest) {
//             currentBiggest = element;
//             result.push(element);
//         }
//     }

//     return result;
// }

// function solve2(input) {
//     let currentBiggest = Number.MIN_SAFE_INTEGER;
//     const result = input.filter((el) => {
//         if (el >= currentBiggest) {
//             currentBiggest = el;
//             return true;
//         }
//         return false;
//     });

//     return result;
// }

function solve3(array) {
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    const result = [];
    array.reduce((accumulated, current) => {
        if (current >= currentBiggest) {
            currentBiggest = current;
            accumulated.push(current);
        }

        return accumulated;
    }, result);

    return result;
}

console.log(solve3([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));