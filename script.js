// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersBoo;
var numBoo;
var lowerCaseBoo;
var upperCaseBoo;
var length;


var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var  num = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9","0"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g","h", "i","j"]
var upperCase = ["A", "B", "C", "D", "E", "F","G","H","I","J"]
var arrayArray= [];  


function generatePassword(){
    var yourPassword = []
    if(specialCharactersBoo){
        arrayArray = arrayArray.concat(specialCharacters) 
    }
    if(numBoo){
    arrayArray = arrayArray.concat(num) 
    }
    if(lowerCaseBoo){
        arrayArray = arrayArray.concat(lowerCase) 
    }
    if(upperCaseBoo){
        arrayArray = arrayArray.concat(upperCase) 
    }
    if(specialCharactersBoo===false && numBoo === false && lowerCaseBoo === false && upperCaseBoo === false){
        alert("You gotta pick something, dude")
    }

    for(i=0; i<=length; i++){
       var randoNum = Math.floor(Math.random()*arrayArray.length);
       yourPassword.push(arrayArray[randoNum])
    }

    yourPassword = yourPassword.toString().split(',').join("");
    return yourPassword;
}

// Write password to the #password input
function writePassword() {
    length = Number(prompt("how many characters?"));
        while(length < 8 || length > 128){
            alert("Passwords need to be between 8 and 128 characters")
            length = Number(prompt("how many characters?"));  
        }
    specialCharactersBoo = confirm("Do you want special characters?");
    lowerCaseBoo = confirm("Do you want lower case letters?");
    upperCaseBoo = confirm("Do you want upper case letters?");
    numBoo = confirm("Do you want numbers?");

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
