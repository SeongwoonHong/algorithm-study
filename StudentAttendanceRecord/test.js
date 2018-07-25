const checkRecord = require('./index');

test('checkRecord is a function', () => {
  expect(typeof checkRecord).toEqual('function');
})

test('PPALLP returns true', () => {
  expect(checkRecord('PPALLP')).toBeTruthy();
})

test('PPALLL returns false', () => {
  expect(checkRecord('PPALLL')).toBeFalsy();
})
