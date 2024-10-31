// index.test.js
const generatePassword = require("./index");

test("generates a password of default length", () => {
  const password = generatePassword();
  expect(password).toHaveLength(12);
});

test("generates a password of specified length", () => {
  const length = 16;
  const password = generatePassword(length);
  expect(password).toHaveLength(length);
});

test("generates a password with uppercase characters", () => {
  const password = generatePassword(12, { includeUppercase: true });
  expect(/[A-Z]/.test(password)).toBe(true);
});

test("generates a password with numbers", () => {
  const password = generatePassword(12, { includeNumbers: true });
  expect(/[0-9]/.test(password)).toBe(true);
});

test("generates a password with symbols", () => {
  const password = generatePassword(12, { includeSymbols: true });
  expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
});
