function solve(stringArray, start, end) {
    let resultArr = [];
    let startingIndex = stringArray.indexOf(start);
    let endingIndex = stringArray.indexOf(end);
    for(let i = startingIndex; i <= endingIndex; i++){
        resultArr.push(stringArray[i]);
    }

    return resultArr;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));