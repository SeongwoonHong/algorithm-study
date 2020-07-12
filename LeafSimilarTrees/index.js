/**
 Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar. 
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
let stack1 = [];
let stack2 = [];
var leafSimilar = function(root1, root2) {
    dfs(root1, stack1);
    dfs(root2, stack2);
    
    return stack1.join('') === stack2.join('')
};

function dfs(root, stack = []) {
    if (!root) return;
    if (!root.left && !root.right) {
        stack.push(root.val)
    }
    dfs(root.left);
    dfs(root.right);
}
