const longestCommonPrefix = require('./index');

test('longestCommonPrefix is a function', () => {
  expect(typeof longestCommonPrefix).toEqual('function');
})

test('no common prefix', () => {
  expect(longestCommonPrefix(['a', 'b', 'c'])).toEqual('');
})

test('common prefix', () => {
  expect(longestCommonPrefix(['seong', 'seo121111', 'seo423z'])).toEqual('seo');
})

