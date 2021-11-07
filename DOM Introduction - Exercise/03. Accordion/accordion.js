function toggle() {
    const btn = document.querySelector('.button');
    const text = document.getElementById('extra');

    btn.textContent = btn.textContent == 'Less' ? btn.textContent = 'More' : btn.textContent = 'Less';

    text.style.display = text.style.display != 'block' ? 'block' : text.style.display = 'none';
}