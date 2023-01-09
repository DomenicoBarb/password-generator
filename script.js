var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '_', '-', '=', '+', '?', '/'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the password input
function writePassword() {
  // Calls getPrompts
  var correctChoicePrompt = getPrompts(); // will return true or false
  var passwordText = document.querySelector("#password");
  // if true start generatePassword function
  if (correctChoicePrompt) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else { // if false set passwordText.value to zero
    passwordText.value = "";
  }
}

// Password Generation
function generatePassword() {
  // resets password value (defaults to an empty string)
  var password = "";
  // loop will run until i = the same value as characterLength
  for(var i = 0; i < characterLength; i++) {
    // random character selection math, math.floor for an integer (math.random creates random floating point value) giving random value between selected length
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    // starts with default password value and adds new randomIndex (random symbol from that array)
    password = password + choiceArr[randomIndex];
  }
  // display generated password
  return password;
}

// Prompt the user for the password criteria
function getPrompts() {
  // resets choice array (defaults to empty)
  choiceArr = [];
    // password length 8 - 128 prompt
  characterLength = parseInt(prompt("How many characters would you like your new password to be? (type 8 - 128)"));
    // if character number selection is correct 
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ){
      alert("Character length has to be between 8 - 128 digits. Please try again and type the number, do NOT spell it.");
      return false;
    }
    //Lowercase selection
    if (confirm("Would you like lowercase letters in the password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    // Uppercase selection
    if (confirm("Would you like uppercase letters in the password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    // Special characters selection
    if (confirm("Would you like special characters in the password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // Numbers selection
    if (confirm("Would you like numbers in the password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}