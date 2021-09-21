function solve(fruit, weight, price){
    let pricePekKg = price * (weight / 1000);
    return `I need $${pricePekKg.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));