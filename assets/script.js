// Assignment Code
var generateBtn = document.querySelector("#generate");
//----Global----
var password = "";
var passwordLength = 128;
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
  // YOUR CODE GOES HERE
  //----Prompts----
  var isUppercase = confirm("Would you like to use uppercase letters?");
  var isLowercase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("would you like to use numbers?");


//----Uppercase?----
  if (isUppercase == true) {
    for (var i = 0; i <= passwordLength; i++){
    var random = Math.floor(Math.random() * upLetters.length);
    upLetters[random];
    }
    console.log(random)
  }

//----Lowercase?----
  if (isLowercase = confirm) {
    var randomNumber = Math.floor(Math.random() * letters.length);
    password += letters.substring(randomNumber, randomNumber)
    console.log(password);
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

