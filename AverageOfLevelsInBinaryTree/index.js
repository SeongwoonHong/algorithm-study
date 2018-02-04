/**
 * Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let result = [root.val];
  let arr = [root, '/'];
  let level = 0;
  let sum = 0;
  let count = 0;
  while (arr.length >= 2) {
    const node = arr.shift();
    if (node === '/') {
      result.push(sum / count);
      count = 0;
      level += 1;
      sum = 0;
      arr.push(node);
    } else {
      if (node.left) {
        sum += node.left.val;
        arr.push(node.left);
        count += 1;
      }
      if (node.right) {
        sum += node.right.val;
        arr.push(node.right);
        count += 1;
      }
    }
  }
  return result;
};

/**
 * var averageOfLevels = function(root) {
    let q = [root];
    let res = [];
    while(q.length) {
        console.log(q);
        let count = q.length;
        let len = count;
        let sum = 0;
        while(len--) {
            let node = q.shift();
            sum += node.val;
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        res.push(sum/count);
        
    }
    return res;
};
 */