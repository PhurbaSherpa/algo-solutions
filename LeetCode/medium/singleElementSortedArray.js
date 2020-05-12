var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums[i - 1];
    let mid = nums[i];
    let right = nums[i + 1];
    if (left !== mid && mid !== right) return mid;
  }
};
