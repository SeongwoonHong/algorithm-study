/**
 *Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
  
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let stack = [];

var increasingBST = function(root) {
    function getStack(root) {
        if (root === null) return;
    
        getStack(root.left);
        stack.push(root.val);
        getStack(root.right);
    }
    getStack(root);

    let inOrderedTree = new TreeNode(stack.shift());
    let newTree = inOrderedTree;
    while (stack.length) {
        console.log('first', {inOrderedTree, newTree})
        newTree.right = new TreeNode(stack.shift());
        newTree = newTree.right;
    }

    
    return inOrderedTree;
};
