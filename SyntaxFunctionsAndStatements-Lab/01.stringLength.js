function solve(first, second, third){
    let sumLength;
    let avgLength;

    let firstString = first.length;
    let secondString = second.length;
    let thirdString = third.length;

    sumLength = firstString + secondString + thirdString;
    avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}

solve('chocolate', 'ice cream', 'cake');