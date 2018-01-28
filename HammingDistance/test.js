const hammingDistance = require('./index');

test('hammingDistance is a function', () => {
  expect(typeof hammingDistance).toEqual('function');
})
test('1,14', () => {
  expect(hammingDistance(1,14)).toEqual(4);
})
test('1,4', () => {
  expect(hammingDistance(1,4)).toEqual(2);
})
