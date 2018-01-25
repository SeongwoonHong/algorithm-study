// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let arr = str.split(' ');
//   let finalArr = [];
//   for (let element of arr) {
//     finalArr.push(element[0].toUpperCase() + element.slice(1));
//   }
//   return finalArr.join(' ');
// }

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

function capitalize(str) {
  return str.split(' ').map((val) => val[0].toUpperCase() + val.slice(1)).join(' ');
}
module.exports = capitalize;
