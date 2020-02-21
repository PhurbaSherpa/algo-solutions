var maximumProduct = function(nums) {
  let max3 = nums[0] * nums[1] * nums[2];
  let max2 = nums[0] * nums[1];
  let min2 = max2;
  let max = Math.max(nums[0], nums[1]);
  let min = Math.min(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let num = nums[i];
    max3 = Math.max(max3, max2 * num, min2 * num);
    max2 = Math.max(max2, max * num, min * num);
    min2 = Math.min(min2, max * num, min * num);
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  return max3;
};
