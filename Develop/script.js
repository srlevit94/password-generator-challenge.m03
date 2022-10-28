// Get references to the #generate element
// the first element in the HTML document with the id "generate" is returned
// query selector 
var generateBtn = document.querySelector("#generate");

// strings of potential characters to include in password
const characterPool = {
  upper : "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ,
  lower : "abcdefghijklmnopqrstuvwxyz",
  numbers : "0123456789",
  special : "!#$%&'()*+,-./:;<=>?@[\\]\"^_`{|}~",
};

// prompts user to select length and types of characters to include in the password
function generatePassword() {

  var finalCharacters = "";
  
  //asks user to input length and checks whether input is valid
  var length = window.prompt("Please input password length (min 8, max 128).", 0);
  if (length < 8 || length > 128 || isNaN(length) === true) {
    alert("Length must be a numeric value within 8 and 128. Try again. ")
    length = null;
  }
  if (length === null) {
    return;
  }

  //confirms whether or not to include uppercase letters in characterPool
  var upper = window.confirm("Do you want to include uppercase letters?");
  if (upper) {
    finalCharacters += characterPool.upper;
  }

  //confirms whether or not to include lowercase letters in characterPool
  var lower = window.confirm("Do you want to include lowercase letters?");
  if (lower) {
    finalCharacters += characterPool.lower;
  }

  //confirms whether or not to include numbers in characterPool
  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    finalCharacters += characterPool.numbers;
  }

  //confirms whether or not to include special characters in characterPool
  var special = window.confirm("Do you want to include special characters?");
  if (special) {
    finalCharacters += characterPool.special;
  }

  //randomly selects possible characters from characterPool until desired length is achieved
  //returns a final value for password
  var password = "";
  for (let i = 0; i < length; i++) {
    password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() { // 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// random comment


