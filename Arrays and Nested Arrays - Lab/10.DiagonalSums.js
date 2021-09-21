function solve(matrix){
    let primeDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let row = 0; row < matrix.length; row++){
        primeDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix[row].length - 1 - row];
    }

    return [primeDiagonal, secondaryDiagonal].join(' ');
}

console.log(solve(
    [[20, 40],
    [10, 60]]));

console.log(solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));