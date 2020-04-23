/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let result = true;
    let stopper = 'S'
    let arr = [root, stopper];
    
    while(arr.length > 1) {
        let stopperIndex = arr.findIndex(x => x === stopper);
        let nodes = arr.splice(0, stopperIndex);

        for (let i=0; i<nodes.length; i++) {
            if ((nodes[i] && nodes[i].val) !== (nodes[nodes.length-i - 1] && nodes[nodes.length-i - 1].val)) {
                result = false;
                break;
            } else {
                if (nodes[i]) arr.push(nodes[i].left)
                if (nodes[i]) arr.push(nodes[i].right)
            }
        }

        arr.shift();
        arr.push(stopper);
    }
    
    return result;
};

// someone else's code on leetcode using recursive

var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};

//

var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(p, q) {
        // Create two stacks
        var s1 = [p], s2 = [q];
    
        // Perform preorder traversal
        while (s1.length > 0 || s2.length > 0) {
            var n1 = s1.pop(), n2 = s2.pop();
    
            // Two null nodes, let's continue
            if (!n1 && !n2) continue;
    
            // Return false as long as there is a mismatch
            if (!n1 || !n2 || n1.val !== n2.val) return false;
    
            // Scan tree s from left to right
            // and scan tree t from right to left
            s1.push(n1.left); s1.push(n1.right);
            s2.push(n2.right); s2.push(n2.left);
        }
    
        return true;
    }

    return isMirror(root.left, root.right);
};
