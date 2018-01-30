/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let firstRowRegex = /^[qwertyuiop]*$/i;
  let secondRowRegex = /^[asdfghjkl]*$/i;
  let thirdRowRegex = /^[zxcvbnm]*$/i;
  let result = [];
  words.forEach((word, i) => {
    if (firstRowRegex.test(word) || secondRowRegex.test(word) || thirdRowRegex.test(word)) {
      result.push(word);
    }
  })
  return result
};
