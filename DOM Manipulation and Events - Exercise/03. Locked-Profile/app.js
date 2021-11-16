function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const isChecked = ev.target.parentElement
                .querySelector('input[type="radio"][value="unlock"]').checked;
            const div = Array.from(ev.target.parentElement
                .querySelectorAll('div')).find(d => d.id.includes('HiddenFields'));
                
            if (isChecked) {
                if (ev.target.textContent == 'Show more') {
                    ev.target.textContent = 'Hide it'
                    div.style.display = 'block'
                } else {
                    ev.target.textContent = 'Show more'
                    div.style.display = '';
                }
            }
        }
    }
}