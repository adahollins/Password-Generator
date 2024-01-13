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
  var chosen = [];
  var characterLengthEvent = prompt("Enter a number between 8 and 124")
  if (characterLengthEvent >= 8 || i <= 124) {
    chosen.push(characterLengthEvent)
      function getSpecialCharacter() {
      var specialCharactersEvent = confirm("Would you like Special Characters in your password?");
      if (specialCharactersEvent ==  true || specialCharactersEvent == false) {
        chosen.push("specialchar")
        function getNumericCharacter() {
          var numericCharactersEvent = confirm("Would you like Numeric Characters in your password?");
          if (numericCharactersEvent == true || numericCharactersEvent == false) {
            chosen.push("numericchar")
            function getLowerCharacter() {
              var lowerCharactersEvent = confirm("Would you like Lower Case Characters in your password?");
              if (lowerCharactersEvent == true || lowerCharactersEvent == false) {
                chosen.push("lowerchar")
                function getUpperCharacter() {
                  var upperCharactersEvent = confirm("Would you like Upper Case Characters in your password?");
                  if (upperCharactersEvent == true || upperCharactersEvent == false) {
                    chosen.push("upperchar")
                  }
                }
              } getUpperCharacter()
            }
          } getLowerCharacter()
        } getNumericCharacter()
      }
    } getSpecialCharacter()
    console.log(getRandom(chosen))
    getRandom(chosen)
    Math.floor(Math.random()*specialCharacters.length)
  } else {
    return alert("Try another number")
  }
};

// Function for getting a random element from an array
function getRandom(arr) {
  let dupa = "";
  for (let i = 1; i < arr[0]; i++) {
  if (arr[i] == "specialchar") {
    dupa += specialCharacters
  } else if (arr[i] == "numericchar") {
    dupa += numericCharacters
  } else if (arr[i] == "lowerchar") {
    dupa += lowerCasedCharacters
  } else if (arr[i] == "upperchar") {
    dupa += upperCasedCharacters
  } else {
    return dupa;
  }
}
};

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions()
};

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