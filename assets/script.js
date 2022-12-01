// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var passwordLength = 12;
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // YOUR CODE GOES HERE
  var isUppercase = confirm("Would you like to use uppercase letters?");
  var isLowercase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special letters?");
  var isNumber = confirm("would you like to use numbers?");

//----Uppercase?----
  if (isUppercase = true) {
    for (var i = 0; i <= passwordLength; i++)
    random = Math.floor(Math.random() * upLetters.length);
    console.log("uppercase");
  }

//----Lowercase?----
  if (isLowercase) {
    console.log("lowercase");
  }

//----Special----
  if (isSpecial) {
    console.log("special");
  }

//----Number----
  if (isNumber) {
    console.log("number");
  }

  return "";

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

