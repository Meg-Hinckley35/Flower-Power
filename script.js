//setting the variable for the Generate Password Button.
var generateBtn = document.querySelector('#generate');

//creating the function to generate the random password
function generatePassword() {
  //making sure the event listener for the button is working
  console.log("Thank you, your password is being generated...");
  //prompting the user for their desired password characteristics.
  var passwordLength = prompt("How many characters would you like your password to contain?");
  prompt("Please click OK to confirm special characters.");
  prompt("Please click OK to confirm number characters.");
  prompt("Please click OK to confirm lowercase characters.");
  prompt("Please click OK to confirm uppercase characters.");

  //setting the character variables
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //creating a for loop to loop through all possible characters, and using math.random to randomize the chosen characters
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
   };

  return password;
}
//Function to write the password on the page
function writePassword() {
  //the function generatePassword is being called and the value is being stored in the variable 'password'.
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  //This displays the password onto the page
  passwordText.value = password;

}

// Add event listener to the generate password button
generateBtn.addEventListener("click", writePassword);
