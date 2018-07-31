const isValid = require('./index');

test('isValid is a function', () => {
  expect(typeof isValid).toEqual('function');
});

test('() return true', () => {
  expect(isValid('()')).toBeTruthy();
})

test('()[]{} return true', () => {
  expect(isValid('()[]{}')).toBeTruthy();
})

test('(] return false', () => {
  expect(isValid('(]')).toBeFalsy();
})

test('([)] return false', () => {
  expect(isValid('([)]')).toBeFalsy();
})

test('{[]} return true', () => {
  expect(isValid('{[]}')).toBeTruthy();
})
