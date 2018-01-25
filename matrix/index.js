// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [
//       [1,   2,  3, 4, 5],
//       [16, 17, 18, 19, 6],
//       [15, 24, 25, 20, 7],
//       [14,  23,  22, 21, 8]]
//       [13,  12,  11, 10, 9]
//     ]
function matrix(n) {
  let counter = 1;
  let results = [];
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  while (startRow <= endRow && startColumn <= endColumn) {
    // top
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    ++startRow;
    // right
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    --endColumn;
    // bottom
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    --endRow;
    // left
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    ++startColumn;
  }
  return results;
}

module.exports = matrix;
