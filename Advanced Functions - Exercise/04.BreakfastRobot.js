function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function work(input) {
        const [command, item, quantity] = input.split(' ');
        const commands = {
            'report': report(),
            'restock': restock(item, quantity),
            'prepare': prepare(item, quantity)
        };

        return commands[command];
    }

    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }

    function restock(microelement, quantity) {
        quantity = Number(quantity);
        microelements[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);

        for (const element in recipes[recipe]) {
            const remaining = microelements[element] - recipes[recipe][element] * quantity;

            if (remaining < 0) {
                return `Error: not enough ${element} in stock`;
            }

            microelements[element] = remaining;
        }

        return 'Success';
    }

    return work;
}

let manager = solution();

console.log (manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); 
console.log(manager("restock flavour 10")); 
console.log(manager("prepare apple 1")); 
console.log(manager("restock fat 10")); 
console.log(manager("prepare burger 1")); 
console.log(manager("report")); 