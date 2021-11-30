function validate() {
    const email = document.getElementById('email');
    const emailPattern = /^([a-z]+)([@])([a-z]+)([\.])([a-z]+)$/;

    email.addEventListener('change', emailCheck);

    function emailCheck(ev) {
        if (emailPattern.test(email.value) == false) {
            ev.target.classList.add('error');
        } else {
            ev.target.removeAttribute('class');
        }
    }
}