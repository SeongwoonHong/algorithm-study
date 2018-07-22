const repeatedStringMatch = require('./index');

test('repeatedStringMatch is a function', () => {
  expect(typeof repeatedStringMatch).toEqual('function');
});

test('abcd, cdabcdab return 3', () => {
  expect(repeatedStringMatch('abcd', 'cdabcdab')).toEqual(3);
})

test('abcd, cdabcdab return 3', () => {
  expect(repeatedStringMatch('abcd', 'cdabcdab')).toEqual(3);
})

test('return -1 if there is no solution', () => {
  expect(repeatedStringMatch('abcdasdfq', 'caccwe')).toEqual(-1);
})
