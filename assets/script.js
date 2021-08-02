// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowerChar;
var upperChar;
var numChar;
var specialChar;
var criteriaCount;

var criteria = {
  lowers: "abcdefghijklmnopqrstuvwxyz",
  uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specials: "!@#$%^&*()_-",
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

function lenValidation() {
  passwordLength = window.prompt(
    "How many characters long do you want the password?",
    "Must be between 8 and 128."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Must be between 8 and 128.");
    lenValidation();
  }
}

function passwordSpecs() {
  criteriaCount = 0;
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
  }

  if (lowerChar == true) {
    criteriaCount++;
  }
  if (upperChar == true) {
    criteriaCount++;
  }
  if (numChar == true) {
    criteriaCount++;
  }
  if (specialChar == true) {
    criteriaCount++;
  }

  console.log(criteriaCount);
}

lowerChar = true;

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

  return;
}

//Need to store the following:
// passwordLength - integer
// lowerChar - bool
// upperChar - bool
// numChar - bool
// specialChar - bool

//window.alert();
//window.confirm();
//window.prompt();
