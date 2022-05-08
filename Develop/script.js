// Variables
var charLength = 8;
var choiceArr = [];
var specialChar = ["!","@","#","$","%","&","*","+","-","<",">","¿","?","[","]","{","}","(",")","/","^","_",".",";","|"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];

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
  for(var i = 0; i < charLength; i++){
    var randomPass = Math.floor(Math.random() * choiceArr.length);
    pass = pass + choiceArr[randomPass];
  }  
  return pass;
}

// function to get quantity of characters the user wants

function getProm(){
  choiceArr = [];
  charLength = parseInt(prompt("How many characters would you like your password to contain? (8 - 120 characters)"));
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Incorrect length, please try again (8-128).");
    return false;
  }
  
  if (confirm("Click OK to confirm including special characters.")){
    choiceArr = choiceArr.concat(specialChar);
  }

  if (confirm("Click OK to confirm including numeric characters.")){
    choiceArr = choiceArr.concat(number);
  }
  
  if (confirm("Click OK to confirm including lowercase characters.")){
    choiceArr = choiceArr.concat(lowerCase);
  }

  if (confirm("Click OK to confirm including uppercase characters.")){
    choiceArr = choiceArr.concat(upperCase);
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
