function assemble(car) {
    const result = {};
    result.model = car.model;
    result.engine = getEngine(car.power);
    result.carriage = { type: car.carriage, color: car.color };
    car.wheelsize = car.wheelsize % 2 == 0 ? car.wheelsize - 1 : car.wheelsize;
    result.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    function getEngine(power) {
        const engines = [{
            power: 90,
            volume: 1800
        }, {
            power: 120,
            volume: 2400
        }, {
            power: 200,
            volume: 3500
        }];

        return engines.find(el => el.power >= power);
    }

    return result;
}

console.log(assemble({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(assemble({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));