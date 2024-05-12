

const passwordField = document.querySelector('#passwordField');
const generatorBtn = document.querySelector('#generatorBtn');
const copyBtn = document.querySelector('#copyBtn');


const length = 12;


const alphabetsUpper = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
const numbericValues = "1234567890";
const specialChar = "!@#$%^&*()";

const mixPasswordValues = alphabetsUpper + alphabetsLower + numbericValues + specialChar;

let password = "";

function generatePassword() {
   

    while (password.length <= length) {
        password += mixPasswordValues[Math.floor(Math.random() * mixPasswordValues.length)];
    }

    passwordField.value = password;
}


generatorBtn.addEventListener('click', generatePassword);


// copy the password

function copyPassword() {
    
    passwordField.select();
    passwordField.setSelectionRange(0, password.length);
    navigator.clipboard.writeText(passwordField.value)
}

copyBtn.addEventListener('click', copyPassword)

