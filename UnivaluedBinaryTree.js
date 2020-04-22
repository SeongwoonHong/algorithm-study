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
