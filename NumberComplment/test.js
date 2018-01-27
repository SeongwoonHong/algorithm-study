const findComplement = require('./index');

test('findComplement is a function', () => {
  expect(typeof findComplement).toEqual('function');
});

test('5 -> 2', () => {
  expect(findComplement(5)).toEqual(2);
})

test('1 -> 0', () => {
  expect(findComplement(1)).toEqual(0);
})
