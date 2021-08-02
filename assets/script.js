// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are global to have them pass through multiple funcitons
var passwordLength;
var lowerChar;
var upperChar;
var numChar;
var specialChar;
// var criteriaCount;

// Call on this later to create "array of possible values"
var criteria = {
  lowers: "abcdefghijklmnopqrstuvwxyz",
  uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "12345678901234567890",
  specials: "!@#$%^&*()_-~`'/|><!@#$%^&*()_-~`'/|><",
};

// Write password to the #password input
function writePassword() {
  lenValidation();
  passwordSpecs();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This fnn gets user input for length of password and will validate it against criteria.
function lenValidation() {
  passwordLength = window.prompt(
    "How many characters long would you like the password?",
    "Must be between 8 and 128 characters."
  );

  if (passwordLength > 7 && passwordLength < 129) {
  } else {
    window.alert("Must be between 8 and 128 characters.");
    lenValidation();
  }
}

// This fn gets user input for criteria to include and validates that there's at least 1 selected.
function passwordSpecs() {
  // criteriaCount = 0;
  upperChar = window.confirm(
    "Would you like to include UPPERCASE letters? \nOkay = Yes   Cancel = No"
  );
  lowerChar = window.confirm(
    "Would you like to include lowercase letters? \nOkay = Yes   Cancel = No"
  );
  numChar = window.confirm(
    "Would you like to include numbers? \nOkay = Yes   Cancel = No"
  );
  specialChar = window.confirm(
    "Would you like to include special characters? \nIE: $, %, &, ~, ! \nOkay = Yes   Cancel = No"
  );

  if (
    upperChar == false &&
    lowerChar == false &&
    numChar == false &&
    specialChar == false
  ) {
    window.alert("At least one criteria must be selected.");
    passwordSpecs();
  }
}

// This fn creates array of all possible values to includes and randomly selects the amount chosen by user.
// Flaw in this logic is that it MAY include the selected criteria, but is up to the sort method.
function generatePassword() {
  var tempPassword;
  if (lowerChar == true) {
    tempPassword += criteria.lowers;
  }
  if (upperChar == true) {
    tempPassword += criteria.uppers;
  }
  if (numChar == true) {
    tempPassword += criteria.numbers;
  }
  if (specialChar == true) {
    tempPassword += criteria.specials;
  }

  var tempPassword2 = tempPassword.split("");

  tempPassword2.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var tempPassword3 = tempPassword2.slice(0, passwordLength);

  var finalPassword = tempPassword3.join("");

  console.log(finalPassword);
  return finalPassword;
}
