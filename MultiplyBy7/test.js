const multiplyBy7 = require('./index');

test('multiplyBy7 is a function', () => {
  expect(typeof multiplyBy7).toEqual('function');
})

test('2 returns 14', () => {
  expect(multiplyBy7(2)).toEqual(14);
})

test('10 returns 70', () => {
  expect(multiplyBy7(10)).toEqual(70);
})

test('200 returns 1400', () => {
  expect(multiplyBy7(200)).toEqual(1400);
})
