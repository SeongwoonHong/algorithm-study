var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0].length === 0) return '';
  if (strs.length === 1) return strs[0];

  var answer = [];
  var letter = 0;
  var pivotLetter = strs[0][letter];

  for (let firstLetters = 0; firstLetters < strs[0].length; firstLetters++) {
    for (let word = 1; word < strs.length; word++) {
      if (strs[word][letter] === pivotLetter) {
        if (word === strs.length - 1) {
          answer.push(pivotLetter);
        }
      } else {
        return answer.length === 0 ? '' : answer.join("");
      }
    }
    letter++;
    pivotLetter = strs[0][letter];
  }
  return answer.join("");
}

module.exports = longestCommonPrefix;

