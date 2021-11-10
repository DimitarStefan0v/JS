function addItem() {
    ulElement = document.getElementById('items');
    liElement = document.createElement('li');
    input = document.getElementById('newItemText');
    if (input.value.length > 0) {
        liElement.textContent = input.value;
        ulElement.appendChild(liElement);
        input.value = '';
    }
}