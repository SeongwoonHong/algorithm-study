function reverseAll(str) {
  let temp = '';
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      temp += str[i];
    } else {
      if (temp.length > 0) {
        result.push(reverse(temp));
        temp = [];
      }
    }
    if (i === str.length - 1 && temp.length > 0) {
      result.push(reverse(temp));
    }
  }
  return result;
}

function reverse(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}  