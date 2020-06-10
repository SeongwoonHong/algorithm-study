/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const delimeter = 'A';
  let stack = [root, delimeter];
  let parentA = null;
  let parentB = null;
  let depth = 0;
  let depthA = 0;
  let depthB = 0;

  while(stack.length > 1) {
    let shifted = stack.shift();

    if (shifted.left) {
      parentA = shifted.left.val === x ? shifted : parentA;
      parentB = shifted.left.val === y ? shifted : parentB;
    }

    if (shifted.right) {
      parentA = shifted.right.val === x ? shifted : parentA;
      parentB = shifted.right.val === y ? shifted : parentB;
    }
    
    depthA = shifted.val === x ? depth : depthA;
    depthB = shifted.val === y ? depth : depthB;

    if (shifted.left) stack.push(shifted.left)
    if (shifted.right) stack.push(shifted.right)
    if (shifted === delimeter) {
      depth++;
      stack.push(delimeter);
    }
  }

  return depthA === depthB && parentA !== parentB;
};
