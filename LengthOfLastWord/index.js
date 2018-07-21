var lengthOfLastWord = function(s) {
  var words = s.split(' ').filter(a => a.length > 0);
  
  if (!words.length) {
    return 0;
  }
  
  return words[words.length - 1].length;
}

module.exports = lengthOfLastWord;

