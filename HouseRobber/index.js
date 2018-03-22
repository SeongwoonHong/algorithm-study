/**
*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max1 = 0;
    let max2 = 0;
    for(let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            max1 = Math.max(max1 + nums[i], max2);
        }else {
            max2 = Math.max(max1, max2 + nums[i]);
        }
    }
    return Math.max(max1, max2);
};
