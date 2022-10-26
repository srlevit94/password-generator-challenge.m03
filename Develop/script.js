// Assignment code here
// var password = {
//   length: 8,
//   hasUpperCase: true,
//   hasLowerCase: true,
//   hasSpecialChar: true,
// } ;

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!#$%&'()*+,-./:;<=>?@[\\]\"^_`{|}~"

var passwordRules = function(){
//checks validity of password length
  if (password.length >== 8 and <== 128){
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
// the first element in the HTML document with the id "generate" is returned
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
