const distributeCandies = require('./index');

test('distributeCandies is a function', () => {
  expect(typeof distributeCandies).toEqual('function');
});

test('candies = [1,1,2,2,3,3] ', () => {
  expect(distributeCandies([1,1,2,2,3,3])).toEqual(3);
});

test('candies = [1,1,2,3]', () => {
  expect(distributeCandies([1,1,2,3])).toEqual(2);
});

test('candies = [1,1,2,1,1,1,1,1]', () => {
  expect(distributeCandies([1,1,2,1,1,1,1,1])).toEqual(2);
});