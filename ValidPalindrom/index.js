// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

var isPalindrome = function(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

var validPalindrome = function(s) {
  if (isPalindrome(s)) {
    return true;
  }

  for(let i = 0; i < s.length; i++) {
    if (isPalindrome(s.substring(0, i) + s.substring(i+1))) return true
  }

  return false
};


module.exports = validPalindrome;
