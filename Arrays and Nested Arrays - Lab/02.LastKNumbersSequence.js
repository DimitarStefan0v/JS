function solve(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++){
        let sum = 0;
        for(let j = array.length - 1; j >= array.length - k; j--){
            if(j < 0){
                break;
            }
            sum += array[j];
        }
        array.push(sum);
    }

    return array;
}

console.log(solve(6, 3))
console.log(solve(8, 2))