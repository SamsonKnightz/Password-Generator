// Assignment Code
var generateBtn = document.querySelector("#generate");
//----Global----
var password = "";
var passwordLength = 128;
var possibleSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
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

  //----If none was selected----
if (password >=8 && passwordLength <= 128){
  alert("Please, select 1 selction of the options")
}

//----Uppercase?----
  if (isUppercase = confirm) {
    for (var i = 0; i <= passwordLength; i++)
    var randomNumber = Math.floor(Math.random() * upLetters.length);
    password += upLetters.substring(randomNumber, randomNumber + 1);
    console.log(password)
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

