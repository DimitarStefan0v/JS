function extractText() {
    const items = document.getElementById('items').children;
    const result = document.getElementById('result');
    for (let item of Array.from(items)) {
        result.value += item.textContent + '\n';
    }
}