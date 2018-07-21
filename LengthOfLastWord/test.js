const lengthOfLastWord = require('./index');

test('lengthOfLastWord is a function', () => {
  expect(typeof lengthOfLastWord).toEqual('function');
});

test('check empty string', () => {
  expect(lengthOfLastWord('')).toEqual(0);
})

test('two letters', () => {
  expect(lengthOfLastWord('AB')).toEqual(2);
})

test('two letters with blanks after', () => {
  expect(lengthOfLastWord('AB      ')).toEqual(2);
})

test('two letters with blanks before', () => {
  expect(lengthOfLastWord('      AB')).toEqual(2);
})

test('long sentence', () => {
  expect(lengthOfLastWord('Hello this is Seong')).toEqual(5);
})

test('long sentence2', () => {
  expect(lengthOfLastWord('This is cool')).toEqual(4);
})

