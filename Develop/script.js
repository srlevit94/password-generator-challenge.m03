// Get references to the #generate element
// the first element in the HTML document with the id "generate" is returned
// query selector 
var generateBtn = document.querySelector("#generate");

// strings of potential characters to inlcude in password
var characterPool = {
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lower = "abcdefghijklmnopqrstuvwxyz";
  numbers = "0123456789";
  special = "!#$%&'()*+,-./:;<=>?@[\\]\"^_`{|}~";
};

// prompts user to select types of characters to include in the password
function generatePassword() {

  var characters = ""
  
  var length = window.prompt("Please input password length (min 8, max 128).", 0));
  if (length < 8 || length > 128) {
    alert("length must be at least 8 characters and no more than 128 characters.")  
  }

  var upper = window.confirm("Do you want to include uppercase letters?");
  if (upper) {
    characterPool += characterPool.upper;
  }

  var lower = window.confirm("Do you want to include lowercase letters?");
  if (lower) {
    characterPool += characterPool.lower;
  }

  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    characterPool += characterPool.numbers;
  }

  var speacial = window.confirm("Do you want to include special characters?");
  if (special) {
    characterPool += characterPool.special;
  }
 
}

// Write password to the #password input
function writePassword() { // 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var passwordRules = function(){
// //checks validity of password length
//   if (password.length >== 8 and <== 128){
//   console.log("That is a valid length.");
//   return;
//   } else {
//   console.log("Choose a length between 8 and 28 characters.");
//   }

//   //checks to include upper-case letters
//   if (password.hasUpperCase){
//   console.log("Your password includes upper-case letters.");
//   return;
//   } else {
//   console.log("Your password does not include upper-case letters");
//   }

//   //checks to include lower-case letters
//   if (password.hasLowerCase){
//   console.log("Your password includes lower case letters.");
//   return;
//   } else {
//   console.log("Your password does not include lower-case letters");
//   }
//   //checks to inlcude special characters
//   if (password.hasSpecialChar){
//   console.log("Your password includes special characters.");
//   return;
//   } else {
//   console.log("Your password does not special characters.");
//   }
// };


