function register(input) {
    const result = [];

    for (const data of input) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        const hero = {
            name,
            level,
            items
        };
        result.push(hero);
    }

    return JSON.stringify(result);
}

console.log(register(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));