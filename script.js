// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // button click confirmation
  console.log("The button has been clicked.");
  // Prompt the user for the password criteria
  // 1. password length 8 - 128
  // 2. Lowercase, uppercase, special characters
  // Validate the input, ensure char limit is between 8 - 128
  // Generate password
  
  // Display generated password
  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
