/**
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
 */

 /**
 * @param {number[]} nums
 * @return {string[]}
 */
// var findRelativeRanks = function(nums) {
//   let hash = {};
//   let copied = JSON.parse(JSON.stringify(nums));
//   nums.sort((a, b) => b - a);
//   nums.forEach((num, i) => {
//     if (i === 0) {
//       hash[num] = 'Gold Medal';
//     }
//     else if (i === 1) {
//       hash[num] = 'Silver Medal';
//     }
//     else if (i === 2){
//       hash[num] = 'Bronze Medal';
//     } else {
//       hash[num] = (i+1).toString();
//     }
//   });
//   return copied.map((num, i) => hash[num]);
  
// };
var findRelativeRanks = function(nums) {
  const sorted = [...nums].sort((a, b) => b - a);
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  
  const preRanks = sorted.reduce((ranks, score, i) => {
      ranks[score] = medals[i] || `${i + 1}`;
      return ranks;
  }, {});
  
  return nums.map((num) => preRanks[num]);
};