function evenNumbers(array) {
    const output = [];
    for(let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            output.push(array[i]);
        }
    }

    console.log(output.join(' '));
}

evenNumbers(['20', '30', '40', '50', '60']);
evenNumbers(['5', '10']);
