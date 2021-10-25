function solve(matrix) {
    let currentRow = [];
    let currentCol = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        currentRow.push(row.reduce((accumulated, current) => accumulated + current));
        let temp = 0;
        for (let y = 0; y < matrix.length; y++) {
            temp += matrix[y][i];
        }

        currentCol.push(temp);

    }

     return currentRow.concat(currentCol).every((el, i, arr) => el == arr[0]);
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));