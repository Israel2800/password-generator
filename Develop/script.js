// Variables

var characterLength = 8;
var choiceArray = [];
var specialCharArr = [];
var lowerCaseArr = [];
var upperCaseArr = [];

// Assignment code here
// link to letters: http://www.net-comber.com/charset.html

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

// Represents letters of alphabet in CONSOLE
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// function to get quantity of characters the user wants
function generatePassword(lowe, upper, number, symbol, length) {
  //1. Initialize pass var
  //2. Filter out "OK"
  //3. Loop over the length call generator funcion for each type
  //4. Add final password to the password var and return

  let generatedPassword = '';
  
  const typesCount = lower + upper + number + symbol;

  const typesArr = [lower, upper, number, symbol];
  console.log("Types Array: ", typesArr);

}

function generatePassword() {
  var char = "";
  while (char === "" || char === null) {
    char = prompt("How many characters would you like your password to contain?");
  }
  // alert("You decided to have "+char+" characters");
  // console.log("You decided to have "+char+"characters");
  // return char;

 

}
/* OTHER WAY TO DO IT

var getChar = function() {
  var char = "";
  while (char === "" || char === null) {
    char = prompt("How many characters would you like your password to contain?");
  }
  console.log("You chose "+char);
  return char;
}; 
*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
