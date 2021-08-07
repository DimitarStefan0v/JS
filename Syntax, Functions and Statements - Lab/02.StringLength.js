function calc(strOne, strTwo, strThree){
    let sum = strOne.length + strTwo.length + strThree.length;
    let avgLength = Math.floor(sum / calc.arguments.length);
    console.log(sum);
    console.log(avgLength);
}

calc('chocolate', 'ice cream', 'cake');
calc('pasta', '5', '22.3');