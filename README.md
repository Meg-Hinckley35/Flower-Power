# Flower-Power

[Password Generator](file:///Users/meganmccartney/bootcamp/Bootcamp/Flower-Power/password.html)

On this page, you may generate a random password.

First we set the generate password button to a variable.

Next we are creating a function to do the actual generating of the random characters that will make up the new password.  We add a quick console.log to make sure the event listener further down in the code is working.  Then we set up prompts for the user to input their desired password characteristics the function will utilize.

Then we set the character variables that the function will be picking at random.
We create a for loop to run through those characters using the math.random operator to make the random choices.
We return the chosen values.

We also create a function to write the password. We put the generatePassword() function within this fuction.  Set a variable for the passwordText and call the returned password value which will display the new password to the page.

Lastly we add an eventListener to listen for the click on the Generate Password button.  This event will kickstart the rest of our code.

