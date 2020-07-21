// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  // Asking use abou the length of the passowrd adn store it inside of the numPassword
  var numPassword = prompt(
    'Please choose a length for the passord (at least 8 characters and no more than 128 characters)'
  );

  //parses a string argument and returns an integer
  var num = parseInt(numPassword);

  /*
   Check to see if the input is a number 
  , to be less than equal 128, and greatehr than euall 8
  */
  if (Number.isInteger(num) && num <= 128 && num >= 8) {
    //Create object of array to store the true / false based on teh user input
    var password = [
      { lowercase: confirm('Please press "OK" to add Lowercase') },

      { uppercase: confirm('Please press "OK" to add Uppercase') },

      { numeric: confirm('Please press "OK" to add Numeric') },

      { specialChar: confirm('Please press "OK" to add Special Characters') },
    ];

    //Create a pass var to store the resturn result from the randomfunc()
    var pass = randomfunc(
      num,
      password[0].lowercase,
      password[1].uppercase,
      password[2].numeric,
      password[3].specialChar
    );
  } else {
    //else run the generatePassword agin in order to start from beginning
    generatePassword();
  }

  //after all the processes then return the password
  return pass;
}

function randomfunc(numLength, l, u, n, s) {
  if (l == false && u == false && n == false && s == false) {
    alert('You will need at least use ONE character type. Please try again');
  }
  // console.log(numLength + ',' + l + ',' + u + ',' + n + ',' + s);
  //Creat variables for each character type

  var lowercase = 'abcdefghijklmnopqrstuvwxyz'; //All lower case
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //All Upper case
  var numeric = '123456789'; //All the numbers
  var specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\'; //All special charachters

  /*Create an empty array to hold the 
  character type that going to be true*/

  var charResult = [];

  if (l == true) {
    charResult.push(lowercase);
  }
  if (u == true) {
    charResult.push(uppercase);
  }
  if (n == true) {
    charResult.push(numeric);
  }
  if (s == true) {
    charResult.push(specialChar);
  }

  // console.log(typeof result.join(''));
  // console.log(result.join(''));

  /*creates and returns a new string by 
  concatenating all of the elements in an array
  ex: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\"
  */
  var randomCharReult = charResult.join('');
  var charactersLength = randomCharReult.length;
  var finalResult = '';
  //generate the rnadom charachters based on the selection adn the length of the char
  for (var i = 0; i < numLength; i++) {
    finalResult += randomCharReult.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  // console.log(result2);

  //return the whole string base on the user slection
  return finalResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
