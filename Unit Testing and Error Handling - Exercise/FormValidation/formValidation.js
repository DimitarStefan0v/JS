function validate() {
    const checkbox = document.getElementById('company');
    checkbox.addEventListener('change', reveal);

    const companyInfo = document.getElementById('companyInfo');

    document.getElementById('submit').addEventListener('click', checkFields);

    function checkFields(ev) {
        ev.preventDefault();
        let validInputs = true;

        const usernamePattern = /^([a-zA-Z0-9]){3,20}$/;
        const passwordPattern = /^([a-zA-Z0-9_]){5,15}$/;
        const emailPattern = /^([\w]+)\@([\w]+)\.([\w]+)$/;

        const usename = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const companyNumber = document.getElementById('companyNumber');

        if (usernamePattern.test(usename.value) == false) {
            usename.style.borderColor = 'red';
            validInputs = false;
        } else {
            usename.style.border = 'none';
            validInputs = true;
        }

        if (passwordPattern.test(password.value) == false) {
            password.style.borderColor = 'red';
            validInputs = false;
        } else {
            password.style.border = 'none';
            validInputs = true;
        }

        if (confirmPassword.value != password.value) {
            confirmPassword.style.borderColor = 'red';
            validInputs = false;
        } else {
            confirmPassword.style.border = 'none';
            validInputs = true;
        }

        if (emailPattern.test(email.value) == false) {
            email.style.borderColor = 'red';
            validInputs = false;
        } else {
            email.style.border = 'none';
            validInputs = true;
        }

        if (checkbox.checked) {
            companyNumber.value = Number(companyNumber.value);
            if (Number.isNaN(companyNumber.value) || companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                validInputs = false;
            } else {
                companyNumber.style.border = 'none';
                validInputs = true;
            }
        }

        if (validInputs) {
            document.getElementById('valid').style.display = '';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }

    function reveal(ev) {
        if (ev.target.checked == true) {
            companyInfo.style.display = '';
        } else {
            companyInfo.style.display = 'none';
        }
    }
}