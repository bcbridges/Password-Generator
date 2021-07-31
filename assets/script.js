// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowerChar;
var upperChar;
var numChar;
var specialChar;

// Write password to the #password input
function writePassword() {
  lenValidation();
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function lenValidation() {
  passwordLength = window.prompt(
    "How many characters long do you want the password?",
    "Must be between 8 and 128."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Must be between 8 and 128.");
    lenValidation();
  }

  console.log(passwordLength);
}

function passwordSpecs() {
  upperChar = window.confirm("Would you like to include uppercase letters?");
  lowerChar = window.confirm("Would you like to include lowercase letters?");
  numChar = window.confirm("Would you like to include numbers?");
  specialChar = window.confirm(
    "Would you like to include special characters? \n IE: $, %, &"
  );

  if (
    upperChar == false &&
    lowerChar == false &&
    numChar == false &&
    specialChar == false
  ) {
    window.alert("At least one criteria must be selected.");
    passwordSpecs();
  } else {
    console.log("Good job Bruce :)");
  }
}

passwordSpecs();

//Need to store the following:
// passwordLength - integer
// lowerChar - bool
// upperChar - bool
// numChar - bool
// specialChar - bool

//window.alert();
//window.confirm();
//window.prompt();
