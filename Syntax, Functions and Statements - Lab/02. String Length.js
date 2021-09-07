function solve(firstArg, secondArg, thirdArg){
    let totalLength = firstArg.length + secondArg.length + thirdArg.length;
    let avgLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(avgLength);
}

solve('chocolate', 'ice cream', 'cake');

solve('pasta', '5', '22.3');