// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, row = 0, column = 0, stair = '') {
//   if (n === row)
//   return;
//
//   const midPoint = Math.floor((2 * n - 1) / 2);
//
//   if (row < n) {
//     if (midPoint - row <= column && midPoint + row >= column) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//     pyramid(n, row, column++, stair);
//
//   }
//   pyramid(n, row++);
// }
function pyramid(n, row = 0, level = '') {
  if (n === row)
  return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}






// function pyramid(n) {
//   let midPoint = Math.floor((2 * n - 1) / 2);
//   for(let row = 0; row < n; row++) {
//     let level = '';
//
//     for(let column = 0; column < 2*n-1; column++) {
//       if (midPoint - row <= column && midPoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
