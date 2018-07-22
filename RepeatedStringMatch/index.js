/**
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
 */
var repeatedStringMatch = function(A, B) {
  let temp = "";

  for (let i = 1; i <= (B.length / A.length + 2); i++){
    temp += A;
    if (temp.includes(B)){
      return i;
    }
  }
  return -1;
};

module.exports = repeatedStringMatch;

