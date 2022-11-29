//Prompt User for password criteria
var length = prompt("Your password must be between 8-128 characters. How many characters would you like your password to be?");
var yes = ["y","n"];
var uppercase = prompt("Do you want to add Uppercase characters?", yes);
var lowercase = prompt("Do you want to add lowercase?", yes);
var numbers = prompt("Do you want to add numbers?", yes);
var special = prompt("Do you want to add special characters?", yes);



function generatePassword() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 30
    var passGen = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        passGen += characters.substring(randomNumber, randomNumber +1);
    }
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
