const passContainer = document.querySelector('.passContainer');
const password = document.querySelector('#password');
const copyButton = document.querySelector('#copyButton');
const inputLength = document.querySelector('#length');
const passGenerator = document.querySelector('#generator');

// representing elements
const upperCaseEl = document.querySelector('#upperCase');
const lowerCaseEl = document.querySelector('#lowerCase');
const numberEl = document.querySelector('#numbers');
const symbolEl = document.querySelector('#symbols');

//string for storing uppercase , lowercase, numbers and symbols
// for generating password
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+';
// generate random single character using corresponding strings
function generateUpper() {
    return (
        upperCase[Math.floor(Math.random() * upperCase.length)]);
}
function generateLower() {
    return (
        lowerCase[Math.floor(Math.random() * lowerCase.length)]);
}
function generateNumber() {
    return (
        numbers[Math.floor(Math.random() * numbers.length)]);
}
function generateSymbol() {
    return (
        symbols[Math.floor(Math.random() * symbols.length)]);
}
// generateUpper();
function generatePassword() {
    // taking value from input
    let  length = inputLength.value;
    let tempPassword = '';
    // converting into password till input length
    while (length > 0) {
        if (upperCaseEl.checked&&length>0) {
            tempPassword += generateUpper();
            length--;
        }
        if (lowerCaseEl.checked&&length>0) {
            tempPassword += generateLower();
            length--;
        }
        if (numberEl.checked&&length>0) {
            tempPassword += generateNumber();
            length--;
        }
        if (symbolEl.checked&&length>0) {
            tempPassword += generateSymbol();
            length--;
        }
    }
    password.textContent=tempPassword;
    // i can randomise the tempstring before showing on the display
    
    console.log(tempPassword);
}
// generateNumber();
passGenerator.addEventListener('click', generatePassword);

