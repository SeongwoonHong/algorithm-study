const strStr = require('./index');

test('strStr is a function', () => {
  expect(typeof strStr).toEqual('function');
})

test('hello, ll  returns 2', () => {
  expect(strStr('hello', 'll')).toBe(2);
})

test('aaaaa, bba returns -1', () => {
  expect(strStr('aaaaa', 'bba')).toBe(-1);
})
