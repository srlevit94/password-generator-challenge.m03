// Assignment code here
var password = {
  length: 0,
  upperCase: true,
  lowerCase: true,
  specialChar: true,
} ;

var passwordRules = function(){
//checks validity of password length
  if (password.length >= 8 and <= 128){
  console.log("That is a valid length.");
  return;
  } else {
  console.log("Choose a length between 8 and 28 characters.");
  }

  //checks to include upper-case letters
  if (password.upperCase){
  console.log("Your password includes upper-case letters.");
  return;
  } else {
  console.log("Your password does not include upper-case letters");
  }

  //checks to include lower-case letters
  if (password.lowerCase){
  console.log("Your password includes lower case letters.");
  return;
  } else {
  console.log("Your password does not include lower-case letters");
  }
  //checks to inlcude special characters
  if (password.specialChar){
  console.log("Your password includes special characters.");
  return;
  } else {
  console.log("Your password does not special characters.");
  }
};

// Get references to the #generate element
// The "Document" method querySelector() returns the first Element within the document that matches the specified selector,
// or group of selectors. If no matches are found, null is returned.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
