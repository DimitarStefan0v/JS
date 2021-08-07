function findLargest(numOne, numTwo, numThree){
    let largest;
    if (numOne >= numTwo && numOne >= numThree){
        largest = numOne;
    } else if (numTwo >= numOne && numTwo >= numThree){
        largest = numTwo;
    } else {
        largest = numThree;
    }
    console.log(`The largest number is ${largest}.`)
}

findLargest(5, -3, 16);