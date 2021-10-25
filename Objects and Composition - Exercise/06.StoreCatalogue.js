function catalogue(products) {
    const initialCatalogue = {};
    for (let el of products) {
        let [product, price] = el.split(' : ');
        price = Number(price);
        const key = product[0];
        if (!initialCatalogue[key]) {
            initialCatalogue[key] = {};
        }
        initialCatalogue[key][product] = price;

    }

    let sortedKeys = Object.keys(initialCatalogue).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        console.log(key);
        let products = Object.entries(initialCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        products.forEach(el => {
            console.log(` ${el[0]}: ${el[1]}`);
        });
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);