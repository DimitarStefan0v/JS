function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let result = 0;
    const sum = document.getElementById('sum');
    for(let i = 1; i < rows.length - 1; i++) {
        result += Number(rows[i].lastElementChild.textContent);
    }

    sum.textContent = result;
}