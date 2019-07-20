const findPairs = require('./index');

test('findPairs is a function', () => {
  expect(typeof findPairs).toEqual('function');
});

test('([1,3,1,5,4], 0) returns 1', () => {
  expect(findPairs([1,3,1,5,4], 0)).toEqual(1);
});

test('([1,1,1,1,5,4,3], 1) returns 2', () => {
  expect(findPairs([1,1,1,1,5,4,3], 1)).toEqual(2);
});

test('([1,2,3,4,5,2], 2 returns 3', () => {
  expect(findPairs([1,2,3,4,5,2], 2)).toEqual(3);
});
