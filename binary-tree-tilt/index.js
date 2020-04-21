/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var findTilt = function(root) {
  let tilt = 0;

  const dfs = (root) => {
      if (!root) {
        return 0;
      }
      
      let left = dfs(root.left);
      let right = dfs(root.right);
      tilt += Math.abs(left - right);

      return root.val + left + right; 
  }

  dfs(root);

  return tilt;
};


