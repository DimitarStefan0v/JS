function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');
    if (input.value.length == 0) {
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = '[Delete]';
    liElement.appendChild(anchor);

    items.appendChild(liElement);
    input.value = '';

    anchor.addEventListener('click', onClick);

    function onClick(ev) {
        const ul = ev.target.parentNode.parentNode;
        const li = ev.target.parentNode;
        ul.removeChild(li);
    }
}