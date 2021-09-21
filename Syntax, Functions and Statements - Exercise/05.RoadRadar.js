function calc(speed, area) {
    let limit = 0;
    let status = '';
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed - limit > 40){
        status = 'reckless driving';
    } else if (speed - limit > 20){
        status = 'excessive speeding';
    } else {
        status = 'speeding';
    }

    if (limit >= speed) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        return `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
}

console.log(calc(40, 'city'));
console.log(calc(21, 'residential'));
console.log(calc(120, 'interstate'));
console.log(calc(200, 'motorway'));