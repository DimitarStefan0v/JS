function lowestPrice(input) {
    const catalogue = {};

    input.forEach(el => {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!catalogue[product]) {
            catalogue[product] = {
                town,
                price
            };
        } else {
            catalogue[product] = catalogue[product].price <= price ? catalogue[product] : {
                town,
                price
            };
        }
    });

    for(let el in catalogue) {
        console.log(`${el} -> ${catalogue[el].price} (${catalogue[el].town})`);
    }
}

console.log(lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]));