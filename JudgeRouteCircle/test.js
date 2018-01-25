const judgeCircle = require('./index');

test('judgeCircle is a function', () => {
  expect(typeof judgeCircle).toEqual('function');
})

test('UD should make a circle', () => {
  expect(judgeCircle('UD')).toEqual(true);
});

test('LL should not make a circle', () => {
  expect(judgeCircle('LL')).toEqual(false);
});

test('LDRRLRUULR should not make a circle', () => {
  expect(judgeCircle('LDRRLRUULR')).toEqual(false);
});
