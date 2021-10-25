function table(data) {
    const result = [];
    const [town, latitude, longitude] = data[0].split('|').filter(isNotAnEmptyString).map(x => x.trim());

    for (let i = 1; i < data.length; i++) {

        let [townName, width, length] = data[i].split('|').filter(isNotAnEmptyString).map(x => x.trim());
        width = Number(Number(width).toFixed(2));
        length = Number(Number(length).toFixed(2));
        
        const obj = {};
        obj[town] = townName;
        obj[latitude] = width;
        obj[longitude] = length;

        result.push(obj);
    }

    function isNotAnEmptyString(x) {
        return x !== "";
    }

    return JSON.stringify(result);
}

console.log(table(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));

console.log(table(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));