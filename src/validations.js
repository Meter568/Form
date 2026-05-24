const inputEmail = document.querySelector('input[name="email"]');
const spanValidationEmail = document.querySelector('.email-group > span');

const inputPassword = document.querySelector('input[name="password"]');

const inputConfirmPassword = document.querySelector('input[name="passwordConfirm"]');
const spanValidationConfirmPassword = document.querySelector('.confirm-password-group > span');

const submit = document.querySelector('.btn');

function validationEmail(event) {
    const email = event.target.value;
    const regExp = /^[\w.%+-]+@[\w.]+\.[a-zA-Z]{2,}$/g;
    if (regExp.test(email) || email.length === 0) {
        spanValidationEmail.removeAttribute('class');
        spanValidationEmail.textContent = '';
        inputEmail.classList.remove('error');
        submit.removeAttribute('disabled');
    } else {
        spanValidationEmail.setAttribute('class', 'spanError');
        spanValidationEmail.textContent = 'Invalid email address!';
        inputEmail.classList.add('error');
        submit.setAttribute('disabled', 'disabled');
    }
}

inputEmail.addEventListener('input', validationEmail);

function handlePassword(event) {
    const password = event.target.value;
    if (password.length > 0) {
        inputConfirmPassword.removeAttribute('hidden');
        if (inputConfirmPassword.value.length > 0 && password !== inputConfirmPassword.value) {
            spanValidationConfirmPassword.setAttribute('class', 'spanError');
            spanValidationConfirmPassword.textContent = 'Passwords do not match!';
            inputConfirmPassword.classList.add('error');
            submit.setAttribute('disabled', 'disabled');
        } else {
            spanValidationConfirmPassword.removeAttribute('class');
            spanValidationConfirmPassword.textContent = '';
            inputConfirmPassword.classList.remove('error');
            submit.removeAttribute('disabled');
        }
    } else {
        inputConfirmPassword.setAttribute('hidden', 'hidden');
        spanValidationConfirmPassword.removeAttribute('class');
        spanValidationConfirmPassword.textContent = '';
        inputConfirmPassword.value = '';
        inputConfirmPassword.classList.remove('error');
        submit.removeAttribute('disabled');
    }
}

inputPassword.addEventListener('input', handlePassword);

function validationConfirmPassword(event) {
    const confirmPassword = event.target.value;
    if (confirmPassword !== inputPassword.value) {
        spanValidationConfirmPassword.setAttribute('class', 'spanError');
        spanValidationConfirmPassword.textContent = 'Passwords do not match!';
        inputConfirmPassword.classList.add('error');
        submit.setAttribute('disabled', 'disabled');
    } else {
        spanValidationConfirmPassword.removeAttribute('class');
        spanValidationConfirmPassword.textContent = '';
        inputConfirmPassword.classList.remove('error');
        submit.removeAttribute('disabled');
    }
}

inputConfirmPassword.addEventListener('input', validationConfirmPassword);
