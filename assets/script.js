// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(characters) {
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUV"
  // YOUR CODE GOES HERE
  var isUppercase = false;
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;
}

//----Uppercase?----
  if (isUppercase) {
  }

//----Lowercase?----
  if (isLowercase) {
  }

//----Special----
  if (isSpecial) {
  }

//----Number----
  if (isNumber) {
  }
  return"clicked button";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
