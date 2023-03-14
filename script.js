// Assignment Code
var generateBtn = document.querySelector("#generate");

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
  'z',
  ];
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
  'Z',
  ];
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
  '.',
  ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword () {

  var passwordLength = prompt("Choose a password length between 8 and 128 characters.");
  
  if (!passwordLength) return; "No Password";

  passwordLength = parseInt(passwordLength);
  
  if (!passwordLength) {
    alert("Please enter a valid number.")
    return generatePassword ();
  }

if(passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a number between 8 and 128.")
  return generatePassword();
}

var allCharacters = [];

var includeNumbers = confirm("Include numbers?");

if (includeNumbers) {
  allCharacters = allCharacters.concat(numericCharacters);
}

var includeLowerCased = confirm("Include lower cased characters?");

if (includeLowerCased) {
  allCharacters = allCharacters.concat(lowerCasedCharacters);
}

var includeUpperCased = confirm("Include upper cased characters?");

if (includeUpperCased) {
  allCharacters = allCharacters.concat(upperCasedCharacters);
}

var includeSpecial = confirm("Include special characters?");

if (includeSpecial) {
  allCharacters = allCharacters.concat(specialCharacters);
}

console.log(allCharacters);

var passwordString = []
for (var i = 0; i < passwordLength; i++) {
  passwordString += allCharacters[Math.floor(Math.random() * allCharacters.length)];
}

  return passwordString;
}
