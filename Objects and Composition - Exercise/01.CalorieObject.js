function composeObject(array) {
    const result = {};
    for (let i = 0; i < array.length; i += 2) {
        result[array[i]] = Number([array[i + 1]]);
    }

    return result;
}

console.log(composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

console.log(composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));