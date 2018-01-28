const anagramMappings = require('./index');

test('anagramMappings is a function', () => {
  expect(typeof anagramMappings).toEqual('function');
})
test('[12, 28, 46, 32, 50] [50, 12, 32, 46, 28]', () => {
  expect(anagramMappings([12, 28, 46, 32, 50],[50, 12, 32, 46, 28])).toEqual([1,4,3,2,0]);
})
test('[1, 2, 3] [2, 1, 3]', () => {
  expect(anagramMappings([1, 2, 3],[2, 1, 3])).toEqual([1,0,2]);
})

test('[40,40] [40,40]', () => {
  expect(anagramMappings([40,40],[40,40])).toEqual([0,1]);
})
test('[21,5,74,5,74,21],[21,5,74,74,5,21]', () => {
  expect(anagramMappings([21,5,74,5,74,21],[21,5,74,74,5,21])).toEqual([5,4,3,4,3,5]);
})
