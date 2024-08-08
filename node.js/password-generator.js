//Import the generate-password
const generatePassword = require("generate-password");

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 8, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters
  });

  console.log("Generated Password:", password);
}

generateRandomPassword();
