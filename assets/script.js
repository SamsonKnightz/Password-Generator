var generateBtn = document.querySelector("#generate");
var password = "";
var passwordLength = 128;

function generatePassword() {
  //--Set prompt to set boundaries of characters chosen
  var numberPrompt = prompt("Please chose between 8 - 128");
  numberPrompt = parseInt(numberPrompt);

  //----If user does not enter between parameters, function will return with alert.
  if(numberPrompt <= 8){
    return alert ("Password has to be more than characters!");
}
//----If user does not enter between parameters, function will return with alert.
  if(numberPrompt >= 128){
    return alert ("Password has to be less than 128 characters!");
  }
//----Prompts set to confirm or deny characters chosen
  var isUppercase = confirm("Would you like to use uppercase letters?");
  var isLowercase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("would you like to use numbers?");


  
  //----Uppercase?----
  var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (isUppercase) {
    for (var i = 0; i <= passwordLength; i++){
      var random = Math.floor(Math.random() * upLetters.length);
      password = password + upLetters[random];
    }
  }
  
  //----Lowercase?----
  var letters = "abcdefghijklmnopqrstuvwxyz";
  if (isLowercase) {
    for (var i = 0; i <= passwordLength; i++){
      var random = Math.floor(Math.random() * letters.length);
      password = password + letters[random];
    }
  }
  
  //----Special----
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  if (isSpecial) {
    for (var i = 0; i <= passwordLength; i++){
      var random = Math.floor(Math.random() * special.length);
      password = password + special[random];
    }
  }
  
  //----Number----
  var numbers = "1234567890";
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