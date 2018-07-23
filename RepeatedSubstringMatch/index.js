/**
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let size = Math.round(s.length / 2);
  if(s.length < 2) return false;
  let sLen = s.length;
  
  for(let i=1; i <= size; i++) {
      if(sLen % i === 0) {
          let tmpStr = s.slice(i);
          let tmp = s.slice(0, i);
          let re = new RegExp(tmp, "g");
          if(tmpStr.replace(re, '') === '') return true;
      }
  }
  return false;
};

module.exports = repeatedSubstringPattern;

