const repeatedSubstringPattern = require('./index');

test('repeatedSubstringPattern is a function', () => {
  expect(typeof repeatedSubstringPattern).toEqual('function');
});

test('abab should return true', () => {
  expect(repeatedSubstringPattern('abab')).toBeTruthy();
})

test('aba should return false', () => {
  expect(repeatedSubstringPattern('aba')).toBeFalsy();
})

test('abcabcabcabc should return true', () => {
  expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy();
})
