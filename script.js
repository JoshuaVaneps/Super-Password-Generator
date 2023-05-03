3// Assignment Code
var button = document.querySelector(".btn");
var background = document.querySelector("body");
var textContainer = document.querySelector(".card");
var textContentHeader = document.querySelector("h1");
var textContentbody = document.querySelector("h2");
var generateBtn = document.querySelector("#generate");
let characterLength  = 8;
var choiceArr = [];

let specialChar = ['!', '#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','^','`','{','|','}','~','/'];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let number = ['1','2','3','4','5','6','7', '8', '9'];

button.setAttribute("style", "background-color:rgb(225,9,245); box-shadow:  0 0 15px rgb(225,9,245)");
textContentHeader.setAttribute("style","color: white");
textContentbody.setAttribute("style","color: white");
textContainer.setAttribute("style", "background-color: black; box-shadow: 0 0 15px rgb(225,9,245),  0 0 75px rgb(225,9,245); border: 1px solid rgb(225,9,245)");
background.setAttribute("style", "background: url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTVkNWUxZWY3MDMwMDkzYWE0MDhjZDk2MDA3ODIxMjhiOTQ3NzBhZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o6fJ1JHgh4Xw4hoK4/giphy.gif)");

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
  let upPrompt=(confirm("Would you like to include upper case characters?")) 
  if (upPrompt){
    choiceArr = choiceArr.concat(lowerCase);
  }

  let lowPrompt=(confirm("Would you like to include lower case characters?"))
  if (lowPrompt){
    choiceArr = choiceArr.concat(upperCase);
  }

  let numPrompt=(confirm("Would you like to include  numeric characters?"))
  if (numPrompt){
    choiceArr = choiceArr.concat(number);
  }

  let specPrompt=(confirm("Would you like to include special characters?"))
  if (specPrompt){
    choiceArr = choiceArr.concat(specialChar);
  }
  
  while ((!upPrompt) && (!lowPrompt) && (!numPrompt) && (!specPrompt)){
    alert("Sorry you must select atleast one of the options please try again.");
    return false
  }
  return true;
}

