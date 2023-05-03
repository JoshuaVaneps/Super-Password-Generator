3// Assignment Code
var button = document.querySelector(".btn")
var textContainer = document.querySelector(".card");
var textContentHeader = document.querySelector("h1");
var textContentbody = document.querySelector("h2");
var generateBtn = document.querySelector("#generate");
let characterLength  = 8;
var choiceArr = [];

const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let specialChar = (symbols[Math.floor(Math.random() * symbols.length)]);
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let number = ['1','2','3','4','5','6','7', '8', '9'];

button.setAttribute("style", "background-color:rgb(225,9,245); box-shadow:  0 0 15px rgb(225,9,245)");
textContentHeader.setAttribute("style","color: white");
textContentbody.setAttribute("style","color: white");
textContainer.setAttribute("style", "background-color: black; box-shadow: 0 0 15px rgb(225,9,245),  0 0 75px rgb(225,9,245); border: 1px solid rgb(225,9,245)");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  let correctPrompt  = getPrompt(); //return true or false
  if(correctPrompt) {

  var newPassword = generatedPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;}

  else {
    passwordText.value = "";
  }

  }


function generatedPassword() {
  //I would generatPassword based on the prompts
  let password = "";
for (let i=0; i < characterLength; i++) {
  let randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
  return password;
}


function getPrompt(){
    choiceArr = [];
    // a. password length 0 - 128
    characterLength = parseInt(prompt("How long would you like your password?(must be between 8 & 128)"));
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert( "Im sorry but length must be bwtween  8 - 128. Please try again.");
      return false
    }
  if (confirm("Would you like to include upper case characters?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }

  if (confirm("Would you like to include lower case characters?")){
    choiceArr = choiceArr.concat(upperCase);
  }

  if (confirm("Would you like to include  numeric characters?")){
    choiceArr = choiceArr.concat(number);
  }

  if (confirm("Would you like to include special characters?")){
    choiceArr = choiceArr.concat(specialChar);
  }
  return true;
}
