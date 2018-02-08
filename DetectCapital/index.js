/**
 * Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.


 */

 /**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function(word) {
  let upps = word.toUpperCase();
  let lows = word.toLowerCase(); 
  if (word === upps) return true;
  if (lows === word) return true;
  if (!isCapital(word[0])) return false;
  for (let i = 0; i < word.length; i++) {
    if (isCapital(word[0]) && i !== 0 && isCapital(word[i])) {
      return false;
    }
  }
  return true;
};

function isCapital(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
}