// Global Variables
let characterLength = 8;
let choiceArr = [];

// Arrays for lower/uppercase characters, special characters and numbers
let specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '_', '-', '=', '+', '?', '/'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Generate Button
let generateBtn = document.querySelector("#generate");

// When "Clicked" run writePassword
generateBtn.addEventListener("click", writePassword);

// Displays new password on screen (in on-screen box)
function writePassword() {
  // Calls getPrompts
  let correctChoicePrompt = getPrompts(); // will return true or false
  let passwordText = document.querySelector("#password");
  // if true start generatePassword function
  if (correctChoicePrompt) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } 
  // if false set passwordText.value to nothing//
  else {
    passwordText.value = "";
  }
}

// Password Generation
function generatePassword() {
  // resets password value (defaults to an empty string)
  let password = "";
  // loop will run until i = the same value as characterLength
  for(let i = 0; i < characterLength; i++) {
    // random character selection math, math.floor for an integer (math.random creates random floating point value) giving random value between selected length
    let randomIndex = Math.floor(Math.random() * choiceArr.length);
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
      alert("Character length has to be between 8 - 128 digits. Please try again and type the number, do NOT spell it. (Ex: 12 NOT 'twelve')");
      return false;
    }
    // Lowercase selection (if yes it adds lowerCaseArr to choiceArr)
    if (confirm("Would you like lowercase letters in the password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    // Uppercase selection (if yes it adds upperCaseArr to choiceArr)
    if (confirm("Would you like uppercase letters in the password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    // Special characters selection (if yes it adds specialCharArr to choiceArr)
    if (confirm("Would you like special characters in the password? (Ex: #, %, *, @)")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // Numbers selection (if yes it adds numberArr to choiceArr)
    if (confirm("Would you like numbers in the password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}