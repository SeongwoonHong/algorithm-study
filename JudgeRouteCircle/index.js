/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle,
which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right),
L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false

*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let circle1 = [0, 0];
  let R = [1, 0];
  let L = [-1, 0];
  let U = [0, 1];
  let D = [0, -1];
  let circle2 = moves.split('').reduce((acc, move) => {
    switch (move) {
      case 'R':
        acc[0] += R[0];
        acc[1] += R[1];
        break;
      case 'L':
        acc[0] += L[0];
        acc[1] += L[1];
        break;
      case 'U':
        acc[0] += U[0];
        acc[1] += U[1];
        break;
      case 'D':
        acc[0] += D[0];
        acc[1] += D[1];
        break;
      default:
        break;
    }
    return acc;
  }, [0, 0]);
  return JSON.stringify(circle1) === JSON.stringify(circle2);
};

module.exports = judgeCircle;
