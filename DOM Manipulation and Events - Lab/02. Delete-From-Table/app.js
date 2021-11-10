function deleteByEmail() {
    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    const searchEmail = document.querySelector('input[name="email"]');

    let deleted = false;

    for(let row of rows) {
        if (row.children[1].textContent == searchEmail.value) {
            row.parentNode.removeChild(row);
            deleted = true;
            searchEmail.value = '';
        }
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}