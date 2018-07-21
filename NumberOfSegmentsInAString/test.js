const countSegments = require('./index');

test('countSegments function is defined', () => {
  expect(typeof countSegments).toEqual('function');
});

test('"" -> 0', () => {
  expect(countSegments('')).toEqual(0);
});

test('Hello, my name is Seong -> 5', () => {
  expect(countSegments('Hello, my name is Seong')).toEqual(5);
});

test('"Of all the gin joints in all the towns in all the world,   " -> 13', () => {
  expect(countSegments('"Of all the gin joints in all the towns in all the world,   "')).toEqual(13);
});
