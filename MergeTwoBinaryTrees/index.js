/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  let t3 = new TreeNode(t1.val + t2.val);
  t3.left = mergeTrees(t1.left, t2.left);
  t3.right = mergeTrees(t1.right, t2.right);

  return t3;
};

module.exports = mergeTrees;
