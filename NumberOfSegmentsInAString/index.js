/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.
*/

var countSegments = function(s) {
  return s.split(' ').filter(a => a.length > 0).length;
}

module.exports = countSegments;

