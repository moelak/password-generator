// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var numPassword = prompt(
    'Pleasechoose a length of the passord (at least 8 characters and no more than 128 characters)'
  );

  var num = parseInt(numPassword);

  if (Number.isInteger(num) && num <= 128 && num >= 8) {
    var password = [
      { lowercase: confirm('Please press "OK" to add Lowercase') },

      { uppercase: confirm('Please press "OK" to add Uppercase') },

      { numeric: confirm('Please press "OK" to add Numeric') },

      { specialChar: confirm('Please press "OK" to add Special Characters') },
    ];

    var pass = randomfunc(
      num,
      password[0].lowercase,
      password[1].uppercase,
      password[2].numeric,
      password[3].specialChar
    );
  } else {
    generatePassword();
  }
  return pass;
}

function randomfunc(numLength, l, u, n, s) {
  if (l == false && u == false && n == false && s == false) {
    alert('You will need at least use ONE character type. Please try again');
  }
  console.log(numLength + ',' + l + ',' + u + ',' + n + ',' + s);
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '123456789';
  var specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
  // var test ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var result = [];

  if (l == true) {
    result.push(lowercase);
  }
  if (u == true) {
    result.push(uppercase);
  }
  if (n == true) {
    result.push(numeric);
  }
  if (s == true) {
    result.push(specialChar);
  }

  console.log(typeof result.join(''));
  console.log(result.join(''));
  var finalRandomNumber = result.join('');
  var charactersLength = finalRandomNumber.length;
  var result2 = '';
  for (var i = 0; i < numLength; i++) {
    result2 += finalRandomNumber.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  console.log(result2);
  return result2;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
