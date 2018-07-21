const addDigits = require('./index');

test('addDigits is a function', () => {
  expect(typeof addDigits).toEqual('function');
});

test('0 -> 0', () => {
  expect(addDigits(0)).toEqual(0);
})

test('111 -> 3', () => {
  expect(addDigits(111)).toEqual(3);
})

test('545 -> 5', () => {
  expect(addDigits(545)).toEqual(5);
})

test('98712 -> 9', () => {
  expect(addDigits(98712)).toEqual(9);
})
