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
  if (isUppercase) {
    for (var i = 0; i <= passwordLength; i++){
    var random = Math.floor(Math.random() * upLetters.length);
    password = password + upLetters[random];
    }
  }

//----Lowercase?----
if (isLowercase) {
  for (var i = 0; i <= passwordLength; i++){
  var random = Math.floor(Math.random() * letters.length);
  password = password + letters[random];
  }
}

//----Special----
if (isSpecial) {
  for (var i = 0; i <= passwordLength; i++){
  var random = Math.floor(Math.random() * special.length);
  password = password + special[random];
  }
}

//----Number----
if (isNumber) {
  for (var i = 0; i <= passwordLength; i++){
  var random = Math.floor(Math.random() * numbers.length);
  password = password + numbers[random];
  }
 return password;
}
console.log(password)

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);