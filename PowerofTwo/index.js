/**
 * Given an integer, write a function to determine if it is a power of two.

 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  return n.toString(2).split('1').length === 2;
};