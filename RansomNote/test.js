const canConstruct = require('./index');

test('canConstruct is a function', () => {
  expect(typeof canConstruct).toEqual('function');
});

test('(a, b)', () => {
  expect(canConstruct('a', 'b')).toBeFalsy();
})


test('(aa, ab)', () => {
  expect(canConstruct('aa', 'ab')).toBeFalsy();
});

test('(aaa, aaab)', () => {
  expect(canConstruct('aaa', 'aaab')).toBeTruthy();
})
