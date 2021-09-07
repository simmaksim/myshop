const form = document.querySelector('#form');
const errorDiv = document.querySelector('#show-error');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (error) => {
     console.log(5)
     // All validation checks are run in this method.
     let incorrectInput = '';

    const firstLetter = username.value[0];

    // Return true if first letter is uppercase
    const firstLetterIsUpperCase = (firstLetter === firstLetter.toUpperCase());

    if (!firstLetterIsUpperCase) {
        incorrectInput += ' The first letter of username must be uppercase.\n';
    }
    const usernameIncludesDigit = /\d/.test(username.value);

    if (!usernameIncludesDigit) {
        incorrectInput += 'Username must include at least one digit.\n';
    }
    const badPasswordLength = (firstPassword.value.length < 8 || firstPassword.value.length > 20);

    if (badPasswordLength) {
        incorrectInput += ' The password should be within 8 to 20 characters.\n';
    }
    const passwordIncludesUppercase = /[a-z]/.test(firstPassword.value);

    if (!passwordIncludesUppercase) {
        incorrectInput += ' The password should contain at least one uppercase character.\n';
    }

    if (incorrectInput !== "") {
        errorDiv.innerText = incorrectInput;
        errorDiv.style.color = 'red';
        error.preventDefault();
    }
})