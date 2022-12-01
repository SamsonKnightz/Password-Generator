// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(characters) {
  // YOUR CODE GOES HERE
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUV"
  var isUppercase = false;
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;
}


  if (isUppercase) {

  }

  if (isLowercase) {

  }
  if (isSpecial) {

  }
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
