// index.js
function generatePassword(length = 12, options = {}) {
  const {
    includeUppercase = true,
    includeNumbers = true,
    includeSymbols = true,
  } = options;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = lowercaseChars;
  let guaranteedChars = "";

  if (includeUppercase) characters += uppercaseChars;
  if (includeNumbers) {
    characters += numberChars;
    guaranteedChars +=
      numberChars[Math.floor(Math.random() * numberChars.length)];
  }
  if (includeSymbols) {
    characters += symbolChars;
    guaranteedChars +=
      symbolChars[Math.floor(Math.random() * symbolChars.length)];
  }

  let password = guaranteedChars; // Start with guaranteed characters
  for (let i = guaranteedChars.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  password = shuffleString(password); // Shuffle to avoid predictable positions
  return password;
}

function shuffleString(str) {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

module.exports = generatePassword;
