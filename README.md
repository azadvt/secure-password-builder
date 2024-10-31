# Password Generator

A simple and customizable password generator.

## Installation

You can install the package using npm:

```sh
npm install secure-password-builder

Usage
Import the package and use the generatePassword function to generate a password. You can specify the length and options to customize the generated password.

const generatePassword = require('secure-password-builder');

// Generate a password with default options
const defaultPassword = generatePassword();
console.log(`Default password: ${defaultPassword}`);

// Generate a password with specific options
const customPassword = generatePassword(16, {
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
});
console.log(`Custom password: ${customPassword}`);

Options
length (default: 12): Length of the generated password.
includeUppercase (default: true): Include uppercase letters.
includeNumbers (default: true): Include numbers.
includeSymbols (default: true): Include symbols.

Example
Here's an example of how to use the password generator with different options:

const generatePassword = require('secure-password-builder');

// Generate a password with default length and options
console.log(`Default: ${generatePassword()}`);

// Generate a password of length 16 with only lowercase letters
console.log(`Lowercase only: ${generatePassword(16, { includeUppercase: false, includeNumbers: false, includeSymbols: false })}`);

// Generate a password of length 20 with numbers and symbols
console.log(`With numbers and symbols: ${generatePassword(20, { includeUppercase: false, includeNumbers: true, includeSymbols: true })}`);

// Generate a password of length 10 with all character types
console.log(`All types: ${generatePassword(10, { includeUppercase: true, includeNumbers: true, includeSymbols: true })}`);
