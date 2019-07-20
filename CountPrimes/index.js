/**
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let arr = [];
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (arr[i] === undefined) {
      arr[i] = 1;
      count++;


      for (let j = 2; i * j < n; j++) {
        if (i * j < n) {
          arr[i * j] = 0; 
        }
      }
    }
  }

  return count;
};

module.exports = countPrimes;
