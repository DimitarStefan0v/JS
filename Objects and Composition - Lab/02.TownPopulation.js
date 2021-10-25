function city(array) {
    const result = {};
    for (const el of array) {
        const [name, population] = el.split(' <-> ');

        if (result[name] == undefined) {
            result[name] = 0;
        }

        result[name] += Number(population);
    }

    for(const name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}

city(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

city(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);