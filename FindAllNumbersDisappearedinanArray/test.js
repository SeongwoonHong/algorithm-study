const findDisappearedNumbers = require('./index');

test('findDisappearedNumbers function is defined', () => {
  expect(typeof findDisappearedNumbers).toEqual('function');
});

test('calculates correct findDisappearedNumbers value for 1', () => {
  expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
});

test('calculates correct findDisappearedNumbers value for 2', () => {
  expect(findDisappearedNumbers([1,2,3,2,4,4])).toEqual([5,6]);
});
