/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  let result = 0;

  for(let i = 0; i < magazine.length; i++) {
      hash[magazine[i]] = hash[magazine[i]] || 0;
      ++hash[magazine[i]];
  }
  
  for(let i = 0; i < ransomNote.length; i++) {
      if (hash[ransomNote[i]]) {
          --hash[ransomNote[i]];
          ++result
      }
  }
  
  return result === ransomNote.length
};

module.exports = canConstruct;

