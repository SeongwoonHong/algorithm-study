// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let objA = buildCharMap(stringA);
  let objB = buildCharMap(stringB);
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;
  for(let elementA in objA) {
    if (objB[elementA] !== objA[elementA])
      return false;
  }
  return true;
}
function buildCharMap(str) {
  str = str.replace(/[^\w]/g, "").toLowerCase();
  const charMap = {};
  for(let elementA of str) {
    charMap[elementA] = charMap[elementA] + 1 || 1;
  }
  return charMap;
}


module.exports = anagrams;
