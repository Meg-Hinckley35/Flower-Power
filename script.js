//Prompt User for password criteria
var uppercase = prompt("Include Uppercase characters?"); {
  ans = confirm('Yes');
  if (confirm) {
    //if yes include Uppercase characters
  } else {
    //if no don't include Uppercase characters
  }
}
var lowercase = prompt("Include lowercase characters?");{
  ans = confirm('Yes');
  if (ans = "OK") {
    //if yes include lowercase characters
  } else {
    //if no don't include lowercase characters

  }
}
var numbers = prompt(" Include numbers?");{
  ans = confirm('Yes');
  if (ans) {
    //if yes include numbers
  } else {
    //if no don't include numbers
  }
}
var special = prompt("Include special characters?"); {
  ans = confirm('Yes');
  if (ans) {
    //if yes include special characters
  } else {
    //if no don't include special characters
  }
}



function generatePassword() {
    var alphaLow = "abcdefghijklmnopqrstuvwxyz";
    var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numerics = "01234567890"
    var symbols = "!@#$%^&*()_-+="
    
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
