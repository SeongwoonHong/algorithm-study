/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let hash = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }
    Object.keys(hash).forEach((item) => {
        let temp1 = hash[item] + hash[+item-1] || 0;
        let temp2 = hash[item] + hash[+item+1] || 0;
        max = Math.max(temp1, temp2, max);
    });
    
    return max;
};