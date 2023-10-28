// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var length = parseInt(prompt('How many characters would you like your password to contain? Please enter a number beween 8 and 128.'));
    var specialCharacters = confirm('Would you like to include special characters in your password?');
    var numericCharacters =  confirm('Would you like to include numbers in your password?');
    var lowerCasedCharacters = confirm('Would you like to include lowercase letters in your password?');
    var upperCasedCharacters = confirm('Would you like to include uppercase letters in your password?');

    if (characterLength(length) || length < 8 || length > 128) {
      alert('Please enter a valid number between 8 and 128.');
      return;
    }
  }
  getPasswordOptions();
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * specialCharacters.length);
    return arr[randomIndex];
  }
  getRandom();
  
  
  // Function to generate password with user input
  function generatePassword() {
    if (specialCharacters) {
      characters = character.concat(specialCharacters);
    }

    if (numericCharacters) {
      characters = characters.concat(numericCharacters);
    }

    if (lowerCasedCharacters) {
      characters = characters.concat(lowerCasedCharacters);
    }

    if (upperCasedCharacters) {
      characters = characters.concat(upperCasedCharacters);
    }

    for (var i = 0; i < length; i++) {
      password += getRandomCharacter(characters);
    }
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);