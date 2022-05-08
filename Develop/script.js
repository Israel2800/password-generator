// Variables
var characterLength = 8;
var choiceArray = [];
var specialCharArr = ["!","@","#","$","%","&","*","+","-","<",">","¿","?","[","]","{","}","(",")","/","^","_",".",";","|"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

// Assignment code here
// link to characters: http://www.net-comber.com/charset.html
    
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// NUMEBRS
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// SYMBOL
function getRandomSymbol(){
  const symbols = '!@#$%&*¿?()[]{}<>/^.,;-_+~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// CAPITAL LETTERS
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// NO CAPITAL LETTERS
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Represents random letters of alphabet in CONSOLE
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Function to generate a password
function generatePassword() {
  var pass = "";
  for(var i = 0; i < characterLength; i++){
    var randomPass = Math.floor(Math.random() * choiceArray.length);
    pass = pass + choiceArray[randomPass];
  }  
  return pass;
}

// function to get quantity of characters the user wants

function getProm(){
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters would you like your password to contain? (8 - 120 characters)"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Incorrect length, please try again (8-128).");
    return false;
  }
  
  if (confirm("Click OK to confirm including special characters.")){
    choiceArray = choiceArray.concat(specialCharArr);
  }

  if (confirm("Click OK to confirm including numeric characters.")){
    choiceArray = choiceArray.concat(numberArr);
  }
  
  if (confirm("Click OK to confirm including lowercase characters.")){
    choiceArray = choiceArray.concat(lowerCaseArr);
  }

  if (confirm("Click OK to confirm including uppercase characters.")){
    choiceArray = choiceArray.concat(upperCaseArr);
  }

  return true;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctProm = getProm();
  var passwordText = document.querySelector("#password");


  if (correctProm) {
    var password = generatePassword();
    passwordText.value = password;  
  } else {
    passwordText.value = "";
  } 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
