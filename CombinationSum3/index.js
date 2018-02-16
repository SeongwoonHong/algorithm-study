// /**
//  * Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


// Example 1:

// Input: k = 3, n = 7

// Output:

// [[1,2,4]]

// Example 2:

// Input: k = 3, n = 9

// Output:

// [[1,2,6], [1,3,5], [2,3,4]]
// Credits:
// Special thanks to @mithmatt for adding this problem and creating all test cases.
//  */
// /**
//  * @param {number} k
//  * @param {number} n
//  * @return {number[][]}
//  */

// var sumOfArray = function (arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// var noname = function(num, chunk, result, n, k, isLast) {
//   while (num > 0) {
//     chunk.unshift(num);
//     if (sumOfArray(chunk) >= n) {
//       if (chunk.length !== k) {
//         chunk.shift(num);
//       }
//       if (chunk.length === k) {
//         let chunk2 = chunk; // 이렇게 안하고 다르게 못하려나..ㅡㅡ??
//         result.push(chunk2);
//         chunk = [];
//       }
//     }
//     num--;
//   }
//   return result;
// }
// var combinationSum3 = function(k, n) {
//   let result = [];
//   let chunk = [];
//   let num = n - 3;
//   let isLast
//   result.push(noname(num, [], [], n, k, isLast));
//   return result;
// };


// combinationSum3(3, 9)


// module.exports = combinationSum3;