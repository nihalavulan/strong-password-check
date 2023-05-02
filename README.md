Password Strength Checker
A simple module to check the strength of a password based on configurable criteria.

Installation
To install this module, run the following command:

Copy code
npm install password-strength-checker
Usage
The module exports a single function, getPasswordStrength, which takes two arguments:

password: A string representing the password to check.
config: An object containing the configuration options for the password strength checker. The following options are available:
uppercase: Boolean. Whether the password must contain at least one uppercase letter. Default: true.
lowercase: Boolean. Whether the password must contain at least one lowercase letter. Default: true.
numbers: Boolean. Whether the password must contain at least one number. Default: true.
symbols: Boolean. Whether the password must contain at least one symbol. Default: true.
minLength: Number. The minimum length of the password. Default: 8.
javascript
Copy code
const getPasswordStrength = require("password-strength-checker");

const password = "myPassword123#";
const config = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  minLength: 8,
};

const result = getPasswordStrength(password, config);

console.log(result);
// {
//   messages: [],
//   strength: 'Strong'
// }
The getPasswordStrength function returns an object with two properties:

messages: An array of strings containing messages for each criterion that the password does not meet.
strength: A string indicating the strength of the password. Possible values are "Weak", "Moderate", and "Strong".
Contributing
Contributions are welcome! If you find a bug or would like to add a feature, please open an issue or pull request on GitHub.