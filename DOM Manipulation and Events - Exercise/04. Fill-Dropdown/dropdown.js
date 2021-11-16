function addItem() {
    document.querySelector('input[type="button"][value="Add"]').addEventListener('click', onCLick);

    function onCLick() {
        const text = document.getElementById('newItemText');
        const val = document.getElementById('newItemValue');
        const option = document.createElement('option');
        option.value = val.value;
        option.textContent = text.value;
        const menu = document.getElementById('menu');
        menu.appendChild(option);
        text.value = '';
        val.value = '';
    }
}