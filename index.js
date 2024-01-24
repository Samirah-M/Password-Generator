// Arrays of characters to be included in password
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  const passLength = parseInt(prompt("Enter password length between 8 and 128"));

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert('Please enter a password length between 8 and 128');
    return getPasswordOptions();
  }

  const Lower = confirm("Password must include at least 1 lowercase letter");
  const Upper = confirm("Password must include at least 1 uppercase letter");
  const Numbers = confirm("Password must include at least 1 number");
  const Symbols = confirm("Password must include at least 1 special character");

  if (!Lower && !Upper && !Numbers && !Symbols) {
    alert('You need to select at least one character type');
    return getPasswordOptions();
  }

  const characterSets = [];

  if (Lower) characterSets.push(lowerCasedCharacters);
  if (Upper) characterSets.push(upperCasedCharacters);
  if (Numbers) characterSets.push(numericCharacters);
  if (Symbols) characterSets.push(specialCharacters);

  return [characterSets.flat(), passLength];
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  const b = getPasswordOptions();
  let c = "";

  for (let i = 0; i < b[1]; i++) {
    c += getRandom(b[0]);
  }

  return c;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);