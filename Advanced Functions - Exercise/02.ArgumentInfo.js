function solve(...params) {
    const output = {};
    for (let arg of params) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        if (!output[type]){
            output[type] = 0;
        }

        output[type] += 1;
    }

    Object.keys(output).sort((a, b) => output[b] - output[a]).forEach(k => console.log(`${k} = ${output[k]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });