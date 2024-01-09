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
  var characterLengthEvent = prompt("Enter a number between 8 and 124");
  if (characterLengthEvent >= 8 || characterLengthEvent <= 124) {
      function getSpecialCharacter() {
      var specialCharactersEvent = confirm("Would you like Special Characters in your password?");
      if (specialCharactersEvent == true || specialCharactersEvent == false) {
        function getNumericCharacter() {
          var numericCharactersEvent = confirm("Would you like Numeric Characters in your password?");
          if (numericCharactersEvent == true || numericCharactersEvent == false) {
            function getLowerCharacter() {
              var lowerCharactersEvent = confirm("Would you like Lower Case Characters in your password?");
              if (lowerCharactersEvent == true || lowerCharactersEvent == false) {
                function getUpperCharacter() {
                  var upperCharactersEvent = confirm("Would you like Upper Case Characters in your password?");
                  if (upperCharactersEvent == true || upperCCharactersEvent == false)
                  return alert("Password Completed")
                }
              } getUpperCharacter()
            }
          } getLowerCharacter()
        } getNumericCharacter()
      }
    } getSpecialCharacter()
  } else {
    return alert("Try another number")
  };
};

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
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