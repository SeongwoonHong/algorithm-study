const validPalindrome = require('./index');

test('validPalindrome is a function', () => {
  expect(typeof validPalindrome).toEqual('function');
})

test('aba returns true', () => {
  expect(validPalindrome('aba')).toBeTruthy();
})

test('abca returns true', () => {
  expect(validPalindrome('abca')).toBeTruthy();
})
