// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunk = [];
//   let lastArr = [];
//   for(let val of array) {
//     lastArr.push(val);
//     if (lastArr.length === size) {
//       chunk.push(lastArr);
//       lastArr = [];
//     }
//   }
//   lastArr.length !== 0 && chunk.push(lastArr);
//   return chunk;
// }

function chunk(array, size) {
  let chunked = [];
  for(let val of array) {
    if (!chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size) {
      chunked.push([val]);
    } else {
      chunked[chunked.length - 1].push(val);
    }
  }
  return chunked;
}

module.exports = chunk;
