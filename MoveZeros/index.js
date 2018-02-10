var moveZeroes = function(nums) {       
  for(var i = nums.length;i >= 0; i--){
    if(nums[i]===0){
      nums.splice(i,1)
      nums.push(0);
    }
  }
};