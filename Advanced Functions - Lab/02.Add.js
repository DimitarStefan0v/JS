function solution(initialValua) {
    
    function increment(number) {
        return initialValua + number;
    }

    return increment;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));