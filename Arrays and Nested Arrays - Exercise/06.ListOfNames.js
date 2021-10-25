function sortNames(arrayOfNames) {
    arrayOfNames.sort((a, b) => a.localeCompare(b));
    arrayOfNames.forEach((e, i) => console.log(`${i + 1}.${e}`));
}

sortNames(["John", "Bob", "Christina", "Ema"]);