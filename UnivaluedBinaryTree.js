let result = true;

let isUnivalTree = function(root) {
    let arr = [root];

    while (arr.length) {
        let shift = arr.shift();

        if (shift.val !== root.val) {
            result = false;
            break;
        }
        
        if (!!shift.left) arr.push(shift.left)
        
        if (!!shift.right) arr.push(shift.right)
    }

    return result;
};


// recursion
var isUnivalTree = function(root) {
    let result = true;
    
    const inner = (node) => {
        if (node && !node.left && !node.right) {
            return;
        }
        
        if (node.left) {
            if (node.left.val !== node.val) {
                result = false;
            }
            inner(node.left)
        }
        
        if (node.right) {
            if (node.right.val !== node.val) {
                result = false;
            }
            inner(node.right);
        }
    }
    
    inner(root);
    
    return result;
};

// someone else's solution on leetcode

var isUnivalTree = function(root) {
    if (root === null) {
        return true;
    }

    let isLeftSame = true;
    let isRightSame = true;
    
    if (root.left !== null) {
        isLeftSame = root.val === root.left.val && isUnivalTree(root.left);
    }

    if (root.right !== null) {
        isRightSame = root.val === root.right.val && isUnivalTree(root.right);
    }   

    return isLeftSame && isRightSame;
};
