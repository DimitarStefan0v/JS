function solve(number, operation1, operation2, operation3, operation4, operation5) {
    let result = Number(number);
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 'chop'){
            result /= 2;
            console.log(result);
        } else if (arguments[i] === 'dice'){
            result = Math.sqrt(result);
            console.log(result);
        } else if (arguments[i] === 'spice'){
            result += 1;
            console.log(result);
        } else if (arguments[i] === 'bake'){
            result *= 3;
            console.log(result);
        } else if (arguments[i] === 'fillet'){
            result -= result * 0.2;
            console.log(result);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');