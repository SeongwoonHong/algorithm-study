const findUnsortedSubarray = require('./index');

test('findUnsortedSubarray is a function', () => {
  expect(typeof findUnsortedSubarray).toEqual('function');
})

test('[2,6,4,8,10,9,15] returns 5', () => {
  expect(findUnsortedSubarray([2,6,4,8,10,9,15])).toEqual(5);
})

test('[2,6,4,8,10,9,15,4,1] returns 9', () => {
  expect(findUnsortedSubarray([2,6,4,8,10,9,15,4,1])).toEqual(9);
})
