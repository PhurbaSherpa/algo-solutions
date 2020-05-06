var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  let majority = nums.length / 2;

  let freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!freq.has(nums[i])) {
      freq.set(nums[i], 1);
    } else {
      let count = freq.get(nums[i]);
      count++;
      if (count > majority) return nums[i];
      freq.set(nums[i], count);
    }
  }
};
