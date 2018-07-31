/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/
var isValid = function(s) {
  let result = [];
  let hash = {
      "(": ")",
      "[": "]",
      "{": "}"
  } 
  for (var i = 0; i < s.length; i++) {
      if (map[s[i]]) {
          result.push(map[s[i]]);
      } else {
          if (s[i] !== result.pop()) {
              return false;
          }
      }
  }
  
  return result.length === 0;
};

module.exports = isValid;
