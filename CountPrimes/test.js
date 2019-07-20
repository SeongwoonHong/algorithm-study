const countPrimes = require('./index');

test('count prime is a function', () => {
  expect(typeof countPrimes).toEqual('function');
})

test('k = 10, n = 4 ', () => {
  expect(countPrimes(10)).toEqual(4);
});
 
test('k = 49985, n = 5130 ', () => {
  expect(countPrimes(49985)).toEqual(5130);
});

test('k = 2000, n = 303 ', () => {
  expect(countPrimes(2000)).toEqual(303);
});
