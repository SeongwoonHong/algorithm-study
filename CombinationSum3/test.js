const combinationSum3 = require('./index');

test('combinationSum3 is a function', () => {
  expect(typeof combinationSum3).toEqual('function');
});

test('k = 3, n = 7 ', () => {
  expect(combinationSum3(3, 7)).toEqual([[1,2,4]]);
});

test('k = 3, n = 9 ', () => {
  expect(combinationSum3(3, 9)).toEqual([[1,2,6], [1,3,5], [2,3,4]]);
});