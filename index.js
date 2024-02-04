function generierePasswort(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-[]{}|;:,.<>?/`~';
    let passwd = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        passwd += characters.charAt(randomIndex);
    }
    return passwd;
}

const lengthInput = document.querySelector('#length');
const lengthValue = document.querySelector('#lengthValue');
const generateButton = document.querySelector('#generate');
const passwordInput = document.querySelector('#password');

lengthInput.addEventListener('input', function () {
    lengthValue.textContent = lengthInput.value;
});

generateButton.addEventListener('click', function () {
    let password = generierePasswort(lengthInput.value);
    passwordInput.value = '';

    let index = 0;
    const intervalId = setInterval(function () {
        passwordInput.value += password[index];
        index++;

        if (index === password.length) {
            clearInterval(intervalId);
        }
    }, 50);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        passwordInput.value = generierePasswort(lengthInput.value);
    }
});